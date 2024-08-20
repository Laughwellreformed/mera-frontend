<template>
  <div class="row">
    <div class="col-sm-12">
      <div class=" card mb-4">
        <div class="card-header">
          <div class="row">
            <div class="col">
              <strong>Users</strong>
            </div>
            <div class="col text-end">
              <CButton color="primary" size="sm" @click="() => { visibleLiveDemo = true }" class="brand-btn-primary">Add User</CButton>
            </div>
          </div>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="users.length === 0">
                <tr>
                  <td colspan="7" class="text-center">No users available</td>
                </tr>
              </template>
              <template v-else>
                <tr v-for="(user, index) in users" :key="user.id">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ user.firstname }}</td>
                  <td>{{ user.lastname }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.role }}</td>
                  <td>
                    <button title="Edit user" class="btn brand-btn-secondary text-black btn-sm"><i class="b- bi-pencil"></i> Edit</button>
                    &nbsp;
                    <button title="Delete user" class="btn btn-danger text-white btn-sm" @click="deleteUser(user.uuid)"><i class="b- bi-trash"></i></button>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Add User Modal -->
    <CModal
        :visible="visibleLiveDemo"
        @close="() => { visibleLiveDemo = false }"
        aria-labelledby="LiveDemoExampleLabel"
    >
      <CModalHeader>
        <CModalTitle id="LiveDemoExampleLabel">Create User</CModalTitle>
      </CModalHeader>
      <form @submit.prevent="addUser">
        <CModalBody>
            <div class="mb-3">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" class="form-control" v-model="firstName" id="firstName" />
            </div>
            <div class="mb-3">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" v-model="lastName" id="lastName" />
            </div>
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" v-model="username" id="username" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" v-model="email" id="email" />
            </div>
            <div class="mb-3">
              <label for="_pass_text" class="form-label">Password</label>
              <input type="text" class="form-control" v-model="password" id="_pass_text" />
            </div>
            <div class="mb-3">
              <label for="role" class="form-label">Role</label>
              <select class="form-select" v-model="role" id="role">
                <option selected>Select Role</option>
                <option value="admin">Admin</option>
                <option value="inspector">Inspector</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" @click="() => { visibleLiveDemo = false }">
            Close
          </CButton>
          <button type="submit" class="btn btn-primary" :disabled="isSubmitting">Create</button>
        </CModalFooter>
      </form>
    </CModal>
  </div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { collection, doc, setDoc, getDocs } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { db } from '@/firebaseConfig'
import axios from 'axios'


const users = ref([])
const visibleLiveDemo = ref(false)
const isSubmitting = ref(false)

// form data
const firstName = ref('')
const lastName = ref('')
const username = ref('')
const email = ref('')
const password = ref('')
const role = ref('')

// Firebase auth instance
const auth = getAuth();

const fetchUsers = async () => {
  const usersCollection = collection(db, 'users')
  const snapshot = await getDocs(usersCollection)
  users.value = snapshot.docs.map(doc => doc.data())
  // try {
  //   const response = await axios.get('http://localhost:3000/users')
  //   users.value = response.data
  // } catch (error) {
  //   console.error('Error fetching users:', error)
  // }
}

const { proxy } = getCurrentInstance()

const addUser = async () => {
   // Create firebase user
  isSubmitting.value = true
  createUserWithEmailAndPassword(auth, email.value, password.value)
      .then( async (userCredential) => {
        const user = userCredential.user;
        // Add user to firestore
        await  setDoc(doc(db, 'users', user.uid), {
          uuid: user.uid,
          firstname: firstName.value,
          lastname: lastName.value,
          username: username.value,
          email: email.value,
          role: role.value
        }).then(() => {
          visibleLiveDemo.value = false
          proxy.$swal.fire('Success', 'User added successfully', 'success')
          // Clear form data
          firstName.value = ''
          lastName.value = ''
          username.value = ''
          email.value = ''
          password.value = ''
          role.value = ''

          // Fetch users
          fetchUsers()
        }).catch((error) => {
          proxy.$swal.fire('Error', 'Error adding user', 'error')
        })

      })
      .catch((error) => {
        proxy.$swal.fire('Error', error.message, 'error')
      })
      .finally(() => {
        isSubmitting.value = false
    })
}

const deleteUser = async (id) => {
  proxy.$swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this user!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes!',
    cancelButtonText: 'No'
  }).then( async  (result) => {
    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`http://localhost:3000/deleteUser/${id}`)
        if (response.status === 200) {
          proxy.$swal.fire('Success', 'User deleted successfully', 'success')
          fetchUsers()
        }
      } catch (error) {
        console.error('Error deleting user:', error)
        proxy.$swal.fire('Error', 'Error deleting user', 'error')
      }
    }
  })
}

onMounted(() => {
  fetchUsers()
})
</script>
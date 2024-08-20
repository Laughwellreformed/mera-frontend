<template>
  <div class="wrapper min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <div class="text-center mb-5 mt-2">
            <img src="/logo/MERA-LOGO.webp" alt="logo" style="width: 150px" />
          </div>
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <form @submit.prevent="signIn">
                  <h1>Login</h1>
                  <p class="text-body-secondary">Sign In to your account</p>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <div class="input-group">
                      <span class="input-group-text">@</span>
                      <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp" >
                    </div>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <div class="input-group">
                      <span class="input-group-text">&#128274;</span>
                      <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                  </div>
                  <button type="submit" class="btn btn-brand-primary btn-sm" :disabled="loading" style="background-color: #E7B22B; border-color: #E7B22B">
                    <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true">Loading ...</span>
                    <span v-if="!loading">Submit</span>
                  </button>
                  <p class="text-danger">{{ message }}</p>

                  <div class="d-flex justify-content-between mt-3">
                    <CButton color="primary" variant="outline" class="btn btn-primary" style="background-color: #DB4437; border-color: #DB4437">
                      <i class="bi bi-google" style="color: white"></i><span style="color: white">oogle</span>
                    </CButton>
                    <CButton color="primary" variant="outline" class="btn btn-primary" style="background-color: #3B5998; border-color: #3B5998">
                      <i class="bi bi-facebook" style="color: white"></i><span style="color: white"> Facebook</span>
                    </CButton>
                    <CButton color="white" variant="outline" class="btn btn-secondary" style="background-color: #00ACEE; border-color: #00ACEE">
                      <i class="bi bi-twitter-x"></i>
                    </CButton>
                  </div>
                </form>
              </CCardBody>
            </CCard>
            <CCard class="text-white py-5" style="width: 44%; background-color: #16AF47">
              <CCardBody class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>
                    If you haven't created your account yet, please register!
                  </p>
                  <a class="btn btn-outline-light"  href="/register">Register Now</a>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
  <Footer />
</template>
<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import { useUserStore } from '@/stores/user'
import router from '@/router'
import Footer from './Footer.vue'

const email = ref('')
const password = ref('')
const message = ref('')
const loading = ref(false)

const auth = getAuth();
const userStore = useUserStore();

const register = async () => {
  loading.value = true;
  createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        router.push('/dashboard')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        message.value = errorMessage
        console.log(errorCode, errorMessage)
      });
}
const signIn = async () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const userDoc = await getDoc(doc(db, 'users', user.uid));

        if(userDoc.exists()) {
          const userData = userDoc.data();
          userStore.setUser(user)
          userStore.setRole(userData.role);
          if (userData.role === 'admin') {
            router.push('/dashboard').catch(err => {
              if (err.name !== 'NavigationDuplicated') {
                throw err;
              }
            });
          } else {
            alert(userData.role);
          }
        } else {
          message.value = 'User data not found';
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case 'auth/invalid-credential':
            message.value = 'Username of password incorrect'
            break;
          case 'auth/wrong-password':
            message.value = 'Username or password incorrect'
            break;
          case 'auth/invalid-email':
            message.value = 'Username or password incorrect'
            break;
          case 'auth/invalid-credential)':
            message.value = 'Username or password incorrect'
            break;
          default:
            message.value = errorMessage
        }
      })
      .finally(() => {
        loading.value = false;
      });
}
const signInWithGoogle = () => {
  router.push('/dashboard')
}
//
// register() {
//   console.log(this.email);
//   return;
//   createUserWithEmailAndPassword(getAuth(), this.email, this.password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user)
//         this.$router.push('/dashboard')
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage)
//       });
// },
// signInWithGoogle() {
//   this.$router.push('/dashboard')
// },
</script>
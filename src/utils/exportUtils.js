import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const exportToExcel = () => {
  const data = getDataForExport();
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
  XLSX.writeFile(workbook, 'report.xlsx');
};

export const exportToCSV = () => {
  const data = getDataForExport();
  const csv = XLSX.utils.json_to_sheet(data);
  const csvContent = XLSX.utils.sheet_to_csv(csv);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, 'report.csv');
};

export const exportToPDF = () => {
  const data = getDataForExport();
  const doc = new jsPDF();
  doc.autoTable({ html: '#table' });
  doc.save('report.pdf');
};

const getDataForExport = () => {
  // Replace with actual data fetching logic
  return [
    { district: 'District 1', stations: 10 },
    { district: 'District 2', stations: 15 },
    // Add more data as needed
  ];
};
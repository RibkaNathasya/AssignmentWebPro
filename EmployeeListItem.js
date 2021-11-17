import React from 'react'

import '../../styles/employee.css';

const EmployeeListItem = () => {
  return (
    <div className="employee-list">
      <img src="https://via.placeholder.com/64" alt="Nama Gambar" />
      <ul>
        <li><strong>Nama Lengkap</strong></li>
        <li className="text-opacity">Jabatan</li>
      </ul>
    </div>
  )
}

export default EmployeeListItem;

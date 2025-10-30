import React, { useState } from 'react';

interface Student {
  id: string;
  name: string;
  mobile: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  shift: string;
}

const EditStudent: React.FC = () => {
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [viewingStudent, setViewingStudent] = useState<Student | null>(null);

  return (
    <div className="space-y-6">
      {/* Edit Student Form */}
      {editingStudent && (
        <form
          key={editingStudent?.id || 'new'}
          className="space-y-4 p-6 bg-white shadow rounded-md"
        >
          <h2 className="text-xl font-semibold mb-4">Edit Student</h2>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={editingStudent?.name || ''}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              defaultValue={editingStudent?.mobile || ''}
              pattern="\d{10}"
              title="Must be exactly 10 digits"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Must be exactly 10 digits</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={editingStudent?.email || ''}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          {/* Date of Birth (Fixed Version) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              defaultValue={
                editingStudent?.dateOfBirth
                  ? (() => {
                      const dob = editingStudent.dateOfBirth;
                      if (/^\d{2}\/\d{2}\/\d{4}$/.test(dob)) {
                        const [day, month, year] = dob.split('/');
                        return `${year}-${month}-${day}`; // Convert DD/MM/YYYY → YYYY-MM-DD
                      }
                      return dob.split('T')[0];
                    })()
                  : new Date().toISOString().split('T')[0]
              }
              required
              readOnly={!!editingStudent}
              className="w-full px-3 py-2 border border-gray-300 rounded-md 
                focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                read-only:bg-gray-100 read-only:text-gray-700"
            />
            {editingStudent && (
              <p className="text-xs text-gray-500 mt-1">
                Date of birth cannot be changed
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              name="gender"
              defaultValue={editingStudent?.gender || ''}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Shift */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shift
            </label>
            <select
              name="shift"
              defaultValue={editingStudent?.shift || ''}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">Select</option>
              <option value="7 AM - 10 PM">7 AM - 10 PM</option>
              <option value="10 AM - 1 PM">10 AM - 1 PM</option>
              <option value="1 PM - 4 PM">1 PM - 4 PM</option>
              <option value="4 PM - 7 PM">4 PM - 7 PM</option>
            </select>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditStudent;

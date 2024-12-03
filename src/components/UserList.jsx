import React, { useState } from 'react';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';
import AddUserModal from './modals/AddUserModal';
import EditUserModal from './modals/EditUserModal';
import { useRBAC } from '../context/RBACContext';

const UserList = () => {
  const { users, roles, addUser, updateUser, deleteUser } = useRBAC();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(id);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow">
        {/* <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Users</h2>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Add User
            </button>
          </div>
        </div> */}
        <div >
          <table className="w-full">
            <thead className="bg-gray-50 font-bold text-lg">
              <tr>
                <th className=" py-3   text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className=" py-3  text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className=" py-3  text-gray-500 uppercase  tracking-wider">
                  Role
                </th>
                <th className=" py-3  text-gray-500 uppercase  tracking-wider">
                  Status
                </th>
                <th className=" py-3  text-gray-500 uppercase  tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y-4 divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td >   
                    <div className=" font-medium text-gray-900 ml-">{user.name}</div>  
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                      {roles.find(role => role.id === user.roleId)?.name}
                    </span>
                  </td>

                  <td className="">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>
                  <div className="text-sm text-gray-500">{user.email}</div>
                  </td>

                  <td>
                    <div className="flex items-center justify-end space-x-2">
                      <button 
                        onClick={() => handleEdit(user)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>


                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
            {/* <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 bg-red-600 text-white rounded-3xl text-3xl font-bold hover:bg-red-800 mt-4 flex items-center justify-between"
            >
              +
            </button> */}


      <div className='flex items-end justify-center'>
        <button
        onClick={() => setIsAddModalOpen(true)}
         className='border-2 border-orange-400 text-white bg-orange-400 text-6xl pb-4 px-4 rounded-3xl mt-8 '>
          +
        </button>
      </div>
      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={addUser}
        roles={roles}
      />
      {selectedUser && (
        <EditUserModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedUser(null);
          }}
          onSave={updateUser}
          user={selectedUser}
          roles={roles}
        />
      )}
    </>
  );
};

export default UserList;

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { permissions } from '../../data/mockData';

const EditRoleModal = ({ isOpen, onClose, onSave, role }) => {
  const [formData, setFormData] = useState(role);

  useEffect(() => {
    setFormData(role);
  }, [role]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handlePermissionToggle = (permission) => {
    setFormData((prev) => {
      const exists = prev.permissions.find((p) => p.id === permission.id);
      if (exists) {
        return {
          ...prev,
          permissions: prev.permissions.filter((p) => p.id !== permission.id),
        };
      }
      return {
        ...prev,
        permissions: [...prev.permissions, permission],
      };
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Role</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Role Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {permissions.map((permission) => (
                  <label key={permission.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      checked={formData.permissions.some((p) => p.id === permission.id)}
                      onChange={() => handlePermissionToggle(permission)}
                    />
                    <span className="text-sm text-gray-700">{permission.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRoleModal;

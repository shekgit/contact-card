import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: ''
    });

    const [allUsers, setAllUsers] = useState([]);

    // input handler
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.number.trim()) {
            alert('Please fill all fields!');
            return;
        }

        if (formData.number.length !== 10) {
            alert('Phone number must be 10 digits!');
            return;
        }

        // unique ID
        const newUser = {
            id: Date.now(),
            ...formData,
            createdAt: new Date().toLocaleString()
        };

        setAllUsers(prev => [...prev, newUser]);

        setFormData({
            name: '',
            number: '',
            email: ''
        });

        console.log('User added:', newUser);
    };

    // Delete user
    const deleteUser = (id) => {
        setAllUsers(prev => prev.filter(user => user.id !== id));
    };

    return (
        <div className={`bg-gray-900 text-white p-6 ${allUsers.length < 3 ? 'min-h-0' : 'min-h-screen'}`}>
            <h1 className="text-4xl font-bold text-center uppercase tracking-wider p-8
                           bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                📞 Phone Book
            </h1>

            <form onSubmit={submitHandler}
                  className="max-w-4xl mx-auto p-8 bg-gray-800/50 rounded-2xl backdrop-blur-sm
                           border border-gray-700/50 shadow-2xl">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                        <label className="block text-gray-300 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter full name"
                            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700
                                     text-white focus:outline-none focus:border-cyan-500"
                            onChange={handleInputChange}
                            value={formData.name}
                            autoFocus
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="number"
                            placeholder="10-digit number"
                            maxLength={10}
                            pattern="[0-9]{10}"
                            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700
                                     text-white focus:outline-none focus:border-cyan-500"
                            onChange={handleInputChange}
                            value={formData.number}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700
                                     text-white focus:outline-none focus:border-cyan-500"
                            onChange={handleInputChange}
                            value={formData.email}
                            required
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="px-8 py-3 rounded-xl font-bold text-lg
                                 bg-gradient-to-r from-cyan-600 to-blue-600
                                 text-white hover:from-cyan-700 hover:to-blue-700
                                 active:scale-95 transition-all duration-300
                                 shadow-lg shadow-cyan-500/30">
                        ➕ Add Contact
                    </button>
                </div>
            </form>

            {/* Users List */}
            <div className="max-w-6xl mx-auto mt-12">
                <h2 className="text-2xl font-bold mb-6 text-center
                              bg-gradient-to-r from-green-400 to-emerald-500
                              text-transparent bg-clip-text">
                    📋 Contacts ({allUsers.length})
                </h2>

                {allUsers.length === 0 ? (
                    <div className="text-center py-12 text-gray-400 italic">
                        No contacts yet. Add your first contact!
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allUsers.map((user) => (
                            <div key={user.id}
                                 className="bg-gradient-to-br from-gray-800/60 to-gray-900/60
                                            backdrop-blur-sm rounded-xl p-6 border border-gray-700/50
                                            shadow-lg hover:shadow-xl transition-shadow">

                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-cyan-300">{user.name}</h3>
                                        <p className="text-sm text-gray-400 mt-1">Added: {user.createdAt}</p>
                                    </div>
                                    <button
                                        onClick={() => deleteUser(user.id)}
                                        className="text-red-400 hover:text-red-300
                                                   hover:bg-red-900/30 p-2 rounded-lg
                                                   transition-colors">
                                        ✕ Delete
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">📱</span>
                                        <span className="text-gray-200">{user.number}</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-400">✉️</span>
                                        <span className="text-gray-200">{user.email}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
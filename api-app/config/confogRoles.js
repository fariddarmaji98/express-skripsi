require('dotenv').config();

module.exports = {
    'secret': process.env.SECRET,
    ROLES: ['admin', 'wali kelas', 'guru mapel', 'siswa']
}
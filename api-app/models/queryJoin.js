const conn = require('./connection');
const Sequelize = require('sequelize');

const joinLaporanNilai = function(table){
	return new Promise(function(resolve, reject){
		conn.query(
                "SELECT db_siswas.nama_siswa, db_nilaimapels.nis, db_nilaimapels.kode_user, db_nilaimapels.id_kelas, db_nilaimapels.tahun_ajaran, db_nilaimapels.semester, db_nilaimapels.ki1ki2_antarmapel, SUM(CAST(total_nilai as DECIMAL(10,2))) as nilai, db_kelas.nama_kelas FROM db_nilaimapels INNER JOIN db_siswas ON db_siswas.nis = db_nilaimapels.nis INNER JOIN db_kelas ON db_kelas.id_kelas = db_nilaimapels.id_kelas GROUP BY db_nilaimapels.nis, db_nilaimapels.semester, db_kelas.nama_kelas"
		    ).then( data => {
			resolve(new Array(true, data[0]));
		}).catch( err => {
			resolve(new Array(false, err.message));
		});
	});
}

const joinLaporanPresensi = function(table){
	return new Promise(function(resolve, reject){
		conn.query(
                "SELECT db_siswas.nama_siswa, db_presens.nis, db_presens.kode_user, db_presens.id_kelas, db_presens.tahun_ajaran, db_presens.semester, SUM(db_presens.jumlah_hadir) as hadir, SUM(db_presens.jumlah_alpha) as alpha, SUM(db_presens.jumlah_ijin) as ijin, db_kelas.nama_kelas FROM db_presens INNER JOIN db_siswas ON db_siswas.nis = db_presens.nis INNER JOIN db_kelas ON db_kelas.id_kelas = db_presens.id_kelas GROUP BY db_presens.nis, db_presens.semester, db_kelas.nama_kelas"
		    ).then( data => {
			resolve(new Array(true, data[0]));
		}).catch( err => {
			resolve(new Array(false, err.message));
		});
	});
}

const joinNilaiRank1 = function(table){
	return new Promise(function(resolve, reject){
		conn.query(
                "select * from (SELECT db_users.username, db_siswas.nama_siswa, db_nilaimapels.nis, db_nilaimapels.kode_user, db_nilaimapels.id_kelas, db_nilaimapels.tahun_ajaran, db_nilaimapels.semester, db_nilaimapels.ki1ki2_antarmapel, SUM(CAST(total_nilai as DECIMAL(10,2))) as nilai, db_kelas.nama_kelas FROM db_nilaimapels INNER JOIN db_users ON db_users.kode = db_nilaimapels.kode_user INNER JOIN db_siswas ON db_siswas.nis = db_nilaimapels.nis INNER JOIN db_kelas ON db_kelas.id_kelas = db_nilaimapels.id_kelas GROUP BY db_nilaimapels.nis, db_nilaimapels.semester, db_kelas.nama_kelas order by nilai desc) as tb1 group by id_kelas, tahun_ajaran order by nilai desc"
		    ).then( data => {
			resolve(new Array(true, data[0]));
		}).catch( err => {
			resolve(new Array(false, err.message));
		});
	});
}

module.exports = { joinLaporanNilai, joinLaporanPresensi, joinNilaiRank1 };
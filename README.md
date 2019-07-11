![alt text](https://raw.githubusercontent.com/indraptama/mkn/master/logo/mkn-logo2-text.png)

# MKN (Manajemen Kantor Notaris)
MKN adalah aplikasi managemen untuk kantor notaris.

- [MKN (Manajemen Kantor Notaris)](#MKN-Manajemen-Kantor-Notaris)
  - [Todo](#Todo)
    - [Frontend](#Frontend)
      - [Manajemen Informasi Data Klien](#Manajemen-Informasi-Data-Klien)
      - [Manajemen Akta dan Surat](#Manajemen-Akta-dan-Surat)
      - [Pembuatan Laporan Bulanan](#Pembuatan-Laporan-Bulanan)
      - [Manajemen Keluar Masuk Berkas](#Manajemen-Keluar-Masuk-Berkas)
      - [Manajemen Jadwal](#Manajemen-Jadwal)
      - [Pembuatan Aplikasi IOS dan Android](#Pembuatan-Aplikasi-IOS-dan-Android)
      - [Live Progress](#Live-Progress)
      - [Chat Function](#Chat-Function)
    - [Backend](#Backend)

## Todo
### Frontend
#### Manajemen Informasi Data Klien
- Input data berdasarkan KTP
- Mengetahui Relasi antar client (dapat mengetahui hubungan klien dengan klien lain dalam keluarga, bisnis, dan perjanjian lain)
- Mengetahui klien pernah membuat akta apa saja
- Dapat mencari klien berdasarkan No.KTP, Nama, Alamat, no Hp, email, npwp dsb.
- Upload berkas-berkas yang berkaitan dengan indentitas klien (KTP, NPWP, SIM, Surat Nikah, Akta Cerai dsb)

#### Manajemen Akta dan Surat
- Manajemen untuk Nomor Akta Notaris / PPAT (tanggal, Judul Akta, Para Penghadap)
- manajemen untuk Nomor disahkan (legalisasi) dan dibukukan (warmeking)
- Manajemen untuk Pembuatan Surat Wasiat
- Manajemen untuk nomor surat keluar Notaris
- Mensave akta dan berkas-berkas lainnya (terdapat tools scanning)
- Dapat membuat Komparisi
- Manajemen Progress Pekerjaan

#### Pembuatan Laporan Bulanan
- Dapat membuat laporan bulanan Notaris dan PPAT secara otomatis
- Dapat memberikan Notifikasi Pelaporan Wasiat dan mensave bukti laporan wasiat

#### Manajemen Keluar Masuk Berkas
- Dapat membuat tanda terima untuk berkas yang diterima kantor atau dikeluarkan oleh kantor
- Dapat diakses oleh smartphone

#### Manajemen Jadwal
- mengatur jadwal bertemu klien dan dapat memberikan notifikasi ke Notaris dan Klien

#### Pembuatan Aplikasi IOS dan Android
- Sebagian Fitur dapat diakses melalui aplikasi smartphone (untuk data yang tidak bersifat rahasia)

#### Live Progress
- Memberikan informasi progress pekerjaan kepada klien.

#### Chat Function

### Backend
- Internal server dengan integrasi sebagian data (non-private data) ke server luar
- Setup Couchdb untuk internal server (tentative) dan Firebase untuk 
- online sync
- Delivering data to third party (App dan Client)
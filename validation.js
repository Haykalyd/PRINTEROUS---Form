$('.ui.form')
  .form({
    fields: {
      nama: {
        identifier: 'nama',
        rules: [
          {
            type   : 'empty',
            prompt : 'Nama tidak boleh kosong'
          },
          {
            type : 'minLength[3]',
            prompt: 'Nama minimal memiliki 3 huruf'
          }
        ]
      },

       email: {
        identifier: 'email',
        rules: [
          {
            type   : 'empty',
            prompt : 'Email tidak boleh kosong'
          },
          {
            type : 'email',
            prompt: 'Email yang anda masukkan salah'
          }
        ]
      },

      telepon: {
        identifier: 'telepon',
        rules: [
          {
            type   : 'integer',
            prompt : 'No. telepon harus angka'
          }
        ]
      },

      alamat: {
        identifier: 'alamat',
        rules: [
          {
            type   : 'maxLenght[100]',
            prompt : 'Alamat rumah tidak bisa melebihi 100 karakter'
          }
        ]
      },
      username: {
        identifier: 'username',
        rules: [
          {
            type   : 'empty',
            prompt : 'Username tidak boleh kosong'
          },
          {
            type : 'regExp[/^[a-z]$/]',
            prompt: 'Username hanya dapat mengandung huruf kecil'
          }
        ]
      },
      password: {
        identifier: 'password',
        rules: [
          {
            type   : 'empty',
            prompt : 'Password tidak boleh kosong'
          },
          {
            type : 'regExp[/^[a-zA-Z_-]{8,16}$/]',
            prompt: 'Password harus memiliki 8-16 karakter, dan mengandung setidaknya 1 huruf besar dan 1 simbol'
          }
        ]
      },
       cPassword: {
        identifier: 'c-password',
        rules: [
          {
            type   : 'match[password]',
            prompt : 'Konfirmsasi password harus sama dengan Password'
          }
        ]
      }
    }
  })
;
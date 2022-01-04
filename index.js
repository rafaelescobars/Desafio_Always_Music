const {
  Client
} = require('pg');

const config = {
  user: "postgres",
  host: "localhost",
  database: "estudiantes",
  password: "qwer1234",
  port: "5432"
}

const client = new Client(config)
client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(res)
//   client.end()
// })

const argumentos = process.argv.slice(2)
const metodo = argumentos[0]

const ingresar = async () => {
  const nombre = argumentos[1]
  const rut = argumentos[2]
  const curso = argumentos[3]
  const nivel = parseInt(argumentos[4])

  const res = await client.query(`insert into estudiantes (nombre, rut, curso, nivel) values ('${nombre}', '${rut}', '${curso}', ${nivel}) RETURNING *`)

  console.log(`Estudiante ${nombre} agregado con éxito`);

  client.end()
}

const consultaRut = async () => {
  const rut = argumentos[1]

  const res = await client.query(`select * from estudiantes where rut='${rut}'`)

  console.log(res.rows);

  client.end()
}

const consulta = async () => {

  const res = await client.query(`select * from estudiantes`)

  console.log(res.rows);

  client.end()
}

const editar = async () => {
  const nombre = argumentos[1]
  const rut = argumentos[2]
  const curso = argumentos[3]
  const nivel = parseInt(argumentos[4])

  const res = await client.query(`update estudiantes set nombre= '${nombre}', rut='${rut}', curso='${curso}', nivel=${nivel} where rut='${rut}' RETURNING *`)

  console.log(`Estudiante ${nombre} editado con éxito`);

  client.end()
}

const eliminar = async () => {
  const rut = argumentos[1]

  const res = await client.query(`delete from estudiantes where rut='${rut}'`)

  console.log(`Regstro de estudiante con rut ${rut} eliminado`);

  client.end()
}

if (metodo === 'nuevo') {
  ingresar()
} else if (metodo === 'rut') {
  consultaRut()
} else if (metodo === 'consulta') {
  consulta()
} else if (metodo === 'editar') {
  editar()
} else if (metodo === 'eliminar') {
  eliminar()
}
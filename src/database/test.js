const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
    // Inserir dados
    proffyValue = {
        name: "Eder Ramos Filho", 
        avatar: "https://avatars3.githubusercontent.com/u/58087953?s=460&u=d7aa219adf8ff58037ab3fdf115bf51ddbf31957&v=4",
        whatsapp: "(47)99188-9002",
        bio: "Entusiasta das melhores tecnologias de informatica.<br><br>Apaixonado por explorar coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas ja aprenderam comigo.",
    }
    
    classValue = {
    subject: "1",
    cost: "15",
    // O proffy_id vira pelo banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos
    
    // todos os proffys
    const selectedProffys =  await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <="1300"
        AND class_schedule.time_to > "1300"
    `)

    // console.log(selectClassesSchedules)

})
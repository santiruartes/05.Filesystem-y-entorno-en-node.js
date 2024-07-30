import inquirer from 'inquirer'
import { createNewUser, getAllUsers } from './helpers/listOptions';

const main = async () => {
    
    let run = true

    while (run) {
        const action = await inquirer.prompt([
        {
            type: "input",
            name: "Nombre",
            message: "Ingresa tu nombre:",
            choises: [
                {
                    value: 1,
                    name: "Ver todos los usuarios"
                }
            ]
        }
    ])

    switch (action.chosenItem) {
        case 1:
            await getAllUsers();
            break
        case 2:
            await createNewUser();
            break
        case 99:
            run = false
            break
        default:
            run = false
            break
    }
}
    }
    

main()

// const main  = async () => {
//     const answers = await inquirer.prompt([
//         {
//             type: "input",
//             name: "nombre",
//             message: "Ingresa tu nombre:"
//         },
//         {
//             type: "input",
//             name: "apellido",
//             message: "Ingresa tu apellido:"
//         }
//     ]);
//     console.log(answers);
//     console.log(`Tu nombre es ${answers.nombre} ${answers.apellido}`);
// };
// main()
//import faker from "faker";
//import { useFaker } from 'react-fakers';
import {randomColor} from "./utils";
import { faker } from '@faker-js/faker';

export default function MakeData(count) {
  let data = [];
  let options = [];
  for (let i = 0; i < count; i++) {
    let row = {
      ID: faker.mersenne.rand(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      age: Math.floor(20 + Math.random() * 20),
      music: faker.music.genre()
    };
    options.push({label: row.music, backgroundColor: randomColor()});

    data.push(row);
  }

  let columns = [
    {
      id: "firstName",
      label: "Parent Type",
      accessor: "firstName",
      minWidth: 100,
      dataType: "text",
      options: []
    },
    {
      id: "idType",
      label: "Id Type",
      accessor: "idType",
      minWidth: 100,
      dataType: "text",
      options: []
    },
    {
      id: "idNumber",
      label: "Id Number",
      accessor: "idNumber",
      minWidth: 100,
      dataType: "number",
      options: []
    },
    {
      id: "fullNameA",
      label: "Full Name A",
      accessor: "fullNameA",
      minWidth: 100,
      dataType: "text",
      options: []
    },
    {
      id: "fullNameE",
      label: "Full Name E",
      accessor: "fullNameE",
      minWidth: 100,
      dataType: "text",
      options: []
    },
    {
      id: "age",
      label: "Age",
      accessor: "age",
      width: 80,
      dataType: "number",
      options: []
    },
    {
      id: "email",
      label: "E-Mail",
      accessor: "email",
      width: 300,
      dataType: "text",
      options: []
    },
    //{
      //id: "music",
      //label: "Music Preference",
      //accessor: "music",
     // dataType: "select",
      //width: 200,
      //options: options
   // },
    {
      id: 999999,
      width: 20,
      label: "+",
      disableResizing: true,
      dataType: "null"
    }
  ];
  return {columns: columns, data: data, skipReset: false};
}

/*
tikslas

treniruotis naudoti React realiose situacijose itraukiant paskaitose apzvelgtus konceptus:
- duomenu laikymo ir dalinimosi tarp komponentu budus: state, props, context, (galbut ref)
- komponentu kurima, aplikacijos kompozicija is komponentu
- React aplikacijos ir komponentu lifecycle ir jo panaudijima iskilusioms problemoms spresti: render phase, commit phase, useEffect hookas, (optional seni class lifecycle metodai, tiap pat memo, useMemo, useCallback)
- atskiru puslapiu kurimas ir routinimas tarp ju
- listu kurimas ir atvaizdavimas Reacte (masyvu mappinimas i komponentus, elementu key 'propsas')
- komponentu stilizavimas

uzduotis

sukurti svetaine su puslapiais:
- home page, kutiame butu titlas, ir about koks nors tekstas
- todos page
1 turi pateikti todos lista is https://jsonplaceholder.typicode.com/todos
2 turi tureti buttona, kuris leistu nustatyti listo orderinima pagal abecele
3 turi tureti buttona, kuris leisti isfiltruoti nepabaigtus (optional ir pabaigtus), bet turint galimybe nuimti filtra ir grizti prie visu, taip pat orderinimas turi veikti ir filtruojant
- theme settings page, kuriame galima butu pakeisti theme

visuose puslapiuose turi buti matoma navigacija virsuje, leidzianti judeti tarp ju

komponentai turi buti stilizuojami individualiai (bent dali stiliu imant is theme), o ne globaliam css faile. Globalus css gali buti naudojamas nustatyti defaultus arba stilizuoti body.


*/

import React, { useState, useEffect } from "react";
import Button from "./Button";

const ORDER_TYPES = {
  ASC: "asc",
  DESC: "desc",
  OFF: "off",
};

const ToDoList = () => {
  const [listItems, setListItems] = useState([]);
  const [ordering, setOrdering] = useState(ORDER_TYPES.OFF);
  const [isFilterOn, setIsFilterOn] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(listItems => setListItems(listItems))
      .catch(error => console.log(error));
  }, []);
  console.log({ listItems });
  console.log({ ordering });

  const toggleOrdering = () => {
    setOrdering(ordering => {
      if (ordering === ORDER_TYPES.OFF || ordering === ORDER_TYPES.DESC) {
        return ORDER_TYPES.ASC;
      }

      return ORDER_TYPES.DESC;
    });
  };

  const toggleFilter = () => {
    setIsFilterOn(isFilterOn => !isFilterOn);
  };

  const prepareListItems = () => {
    let data = [...listItems];

    if (isFilterOn) {
      data = data.filter(item => !item.completed);
    }

    if (ordering === ORDER_TYPES.ASC) {
      const compare = (a, b) => {
        if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
        if (a.title.toUpperCase() < b.title.toUpperCase()) return -1;
        return 0;
      };
      data.sort(compare);
    }

    if (ordering === ORDER_TYPES.DESC) {
      const compare = (a, b) => {
        if (a.title.toUpperCase() > b.title.toUpperCase()) return -1;
        if (a.title.toUpperCase() < b.title.toUpperCase()) return 1;
        return 0;
      };
      data.sort(compare);
    }

    return data;
  };

  const preparedListItems = prepareListItems();
  console.log({ preparedListItems });

  return (
    <div>
      <Button onClick={toggleOrdering}>Sort</Button>
      <Button onClick={toggleFilter}>Filter Not Completed</Button>

      <ul>
        {preparedListItems.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;

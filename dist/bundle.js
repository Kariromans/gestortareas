/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   toggleTask: () => (/* binding */ toggleTask)
/* harmony export */ });
var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// traernos la lista de tareas de almacenamiento local//

//Funcion para agregar una tarea//
var addTask = function addTask(task) {
  var newtask = {
    id: Date.now(),
    text: task,
    completed: false
  };
  tasks.push(newtask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//funcion para eliminar una tarea//
var deleteTask = function deleteTask(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== parseInt(id);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

//funcion para actualizar la tarea//
var toggleTask = function toggleTask(id) {
  tasks = tasks.map(function (task) {
    if (task.id === parseInt(id)) {
      task.completed = !task.completed;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// funcion para llevar las tareas //
var getTasks = function getTasks() {
  return tasks;
};

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


//funcion para mostrarle al usuario las tareas y lo que hacemos con ellas//
var renderTasks = function renderTasks() {
  var TaskList = document.getElementById("task-list");
  TaskList.innerHTML = "";
  var tasks = (0,_task__WEBPACK_IMPORTED_MODULE_0__.getTasks)();
  tasks.forEach(function (task) {
    var li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    // añadir clase solo si la tarea esta completada //
    if (task.completed === true) {
      li.classList.add("completed");
    }
    li.innerHTML = "\n        ".concat(task.text, "\n        <button class= \"delete\"> Eliminar </button> \n        <button class =\"toggle\"> ").concat(task.completed === true ? "Deshacer" : "completar", "  </button>\n        ");
    TaskList.appendChild(li);
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Estilos generales del cuerpo */
body {
    font-family: 'Roboto', sans-serif; /* Fuente moderna y profesional */
    background-color: #f3f4f6; /* Fondo gris suave */
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Estilos para el contenedor principal */
#app {
    background-color: #ffffff; /* Fondo blanco limpio */
    padding: 40px; /* Espaciado generoso */
    border-radius: 16px; /* Bordes redondeados amplios */
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15); /* Sombra suave y profunda */
    max-width: 420px; /* Ancho máximo */
    width: 100%;
}

/* Estilos para el formulario */
form {
    display: flex;
    gap: 12px; /* Espacio entre el input y el botón */
}

/* Estilos para el input de texto */
input[type="text"] {
    flex: 1;
    padding: 14px;
    border: 2px solid #ced4da; /* Borde más grueso para mayor definición */
    border-radius: 10px; /* Bordes redondeados */
    font-size: 18px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input[type="text"]:focus {
    outline: none;
    border-color: #6c63ff; /* Borde morado al enfocar */
    box-shadow: 0 0 10px rgba(108, 99, 255, 0.5); /* Sombra luminosa al enfocar */
}

/* Estilos para el botón */
button {
    padding: 14px 24px;
    background-color: #6c63ff; /* Fondo morado elegante */
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

button:hover {
    background-color: #5848e8; /* Fondo morado más oscuro en hover */
    transform: translateY(-2px); /* Levanta el botón en hover */
    box-shadow: 0 8px 20px rgba(88, 72, 232, 0.4); /* Sombra más fuerte en hover */
}

button:active {
    background-color: #3d2fb2; /* Fondo aún más oscuro al presionar */
    transform: translateY(0); /* Regresa a su posición original */
    box-shadow: none; /* Elimina la sombra al presionar */
}

/* Estilos para la lista de tareas */
ul {
    list-style: none;
    padding: 0;
    margin-top: 30px; /* Espacio entre el formulario y la lista */
}

/* Estilos para cada tarea individual */
li {
    background-color: #f8f9fa;
    padding: 15px;
    border: 1px solid #dee2e6;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

li:hover {
    background-color: #e9ecef; /* Fondo gris suave al pasar el cursor */
    transform: translateX(5px); /* Desplazamiento sutil al pasar el cursor */
}

/* Estilos para cuando una tarea está completada */
li.completed {
    background-color: #d4edda; /* Fondo verde suave para tareas completadas */
    text-decoration: line-through;
    color: #155724; /* Texto verde oscuro para tareas completadas */
    border-color: #c3e6cb; /* Borde verde claro */
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Estilos para el botón de eliminar */
li button.delete {
    background-color: #ff6b6b; /* Fondo rojo para el botón de eliminar */
    color: white;
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

li button.delete:hover {
    background-color: #e63946; /* Fondo rojo más oscuro en hover */
    transform: scale(1.1); /* Aumenta ligeramente el tamaño en hover */
}

li button.delete:active {
    background-color: #c71f37; /* Fondo rojo aún más oscuro al presionar */
    transform: scale(1); /* Regresa al tamaño original */
}

/* Animación para eliminar la tarea */
li.removing {
    opacity: 0; /* Desvanece la tarea antes de eliminarla */
    transform: translateX(100%); /* Desplaza la tarea hacia la derecha */
    transition: opacity 0.4s ease, transform 0.4s ease; /* Animación suave */
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,iCAAiC;AACjC;IACI,iCAAiC,EAAE,iCAAiC;IACpE,yBAAyB,EAAE,qBAAqB;IAChD,SAAS;IACT,UAAU;IACV,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,yCAAyC;AACzC;IACI,yBAAyB,EAAE,wBAAwB;IACnD,aAAa,EAAE,uBAAuB;IACtC,mBAAmB,EAAE,+BAA+B;IACpD,2CAA2C,EAAE,4BAA4B;IACzE,gBAAgB,EAAE,iBAAiB;IACnC,WAAW;AACf;;AAEA,+BAA+B;AAC/B;IACI,aAAa;IACb,SAAS,EAAE,sCAAsC;AACrD;;AAEA,mCAAmC;AACnC;IACI,OAAO;IACP,aAAa;IACb,yBAAyB,EAAE,2CAA2C;IACtE,mBAAmB,EAAE,uBAAuB;IAC5C,eAAe;IACf,wDAAwD;AAC5D;;AAEA;IACI,aAAa;IACb,qBAAqB,EAAE,4BAA4B;IACnD,4CAA4C,EAAE,+BAA+B;AACjF;;AAEA,0BAA0B;AAC1B;IACI,kBAAkB;IAClB,yBAAyB,EAAE,0BAA0B;IACrD,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,iFAAiF;AACrF;;AAEA;IACI,yBAAyB,EAAE,qCAAqC;IAChE,2BAA2B,EAAE,8BAA8B;IAC3D,6CAA6C,EAAE,+BAA+B;AAClF;;AAEA;IACI,yBAAyB,EAAE,sCAAsC;IACjE,wBAAwB,EAAE,mCAAmC;IAC7D,gBAAgB,EAAE,mCAAmC;AACzD;;AAEA,oCAAoC;AACpC;IACI,gBAAgB;IAChB,UAAU;IACV,gBAAgB,EAAE,2CAA2C;AACjE;;AAEA,uCAAuC;AACvC;IACI,yBAAyB;IACzB,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,2DAA2D;AAC/D;;AAEA;IACI,yBAAyB,EAAE,wCAAwC;IACnE,0BAA0B,EAAE,4CAA4C;AAC5E;;AAEA,kDAAkD;AAClD;IACI,yBAAyB,EAAE,8CAA8C;IACzE,6BAA6B;IAC7B,cAAc,EAAE,+CAA+C;IAC/D,qBAAqB,EAAE,sBAAsB;IAC7C,uDAAuD;AAC3D;;AAEA,sCAAsC;AACtC;IACI,yBAAyB,EAAE,yCAAyC;IACpE,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,2DAA2D;AAC/D;;AAEA;IACI,yBAAyB,EAAE,mCAAmC;IAC9D,qBAAqB,EAAE,2CAA2C;AACtE;;AAEA;IACI,yBAAyB,EAAE,2CAA2C;IACtE,mBAAmB,EAAE,+BAA+B;AACxD;;AAEA,qCAAqC;AACrC;IACI,UAAU,EAAE,2CAA2C;IACvD,2BAA2B,EAAE,uCAAuC;IACpE,kDAAkD,EAAE,oBAAoB;AAC5E","sourcesContent":["/* Estilos generales del cuerpo */\nbody {\n    font-family: 'Roboto', sans-serif; /* Fuente moderna y profesional */\n    background-color: #f3f4f6; /* Fondo gris suave */\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Estilos para el contenedor principal */\n#app {\n    background-color: #ffffff; /* Fondo blanco limpio */\n    padding: 40px; /* Espaciado generoso */\n    border-radius: 16px; /* Bordes redondeados amplios */\n    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15); /* Sombra suave y profunda */\n    max-width: 420px; /* Ancho máximo */\n    width: 100%;\n}\n\n/* Estilos para el formulario */\nform {\n    display: flex;\n    gap: 12px; /* Espacio entre el input y el botón */\n}\n\n/* Estilos para el input de texto */\ninput[type=\"text\"] {\n    flex: 1;\n    padding: 14px;\n    border: 2px solid #ced4da; /* Borde más grueso para mayor definición */\n    border-radius: 10px; /* Bordes redondeados */\n    font-size: 18px;\n    transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n\ninput[type=\"text\"]:focus {\n    outline: none;\n    border-color: #6c63ff; /* Borde morado al enfocar */\n    box-shadow: 0 0 10px rgba(108, 99, 255, 0.5); /* Sombra luminosa al enfocar */\n}\n\n/* Estilos para el botón */\nbutton {\n    padding: 14px 24px;\n    background-color: #6c63ff; /* Fondo morado elegante */\n    color: white;\n    border: none;\n    border-radius: 10px;\n    font-size: 18px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;\n}\n\nbutton:hover {\n    background-color: #5848e8; /* Fondo morado más oscuro en hover */\n    transform: translateY(-2px); /* Levanta el botón en hover */\n    box-shadow: 0 8px 20px rgba(88, 72, 232, 0.4); /* Sombra más fuerte en hover */\n}\n\nbutton:active {\n    background-color: #3d2fb2; /* Fondo aún más oscuro al presionar */\n    transform: translateY(0); /* Regresa a su posición original */\n    box-shadow: none; /* Elimina la sombra al presionar */\n}\n\n/* Estilos para la lista de tareas */\nul {\n    list-style: none;\n    padding: 0;\n    margin-top: 30px; /* Espacio entre el formulario y la lista */\n}\n\n/* Estilos para cada tarea individual */\nli {\n    background-color: #f8f9fa;\n    padding: 15px;\n    border: 1px solid #dee2e6;\n    border-radius: 10px;\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    transition: background-color 0.3s ease, transform 0.3s ease;\n}\n\nli:hover {\n    background-color: #e9ecef; /* Fondo gris suave al pasar el cursor */\n    transform: translateX(5px); /* Desplazamiento sutil al pasar el cursor */\n}\n\n/* Estilos para cuando una tarea está completada */\nli.completed {\n    background-color: #d4edda; /* Fondo verde suave para tareas completadas */\n    text-decoration: line-through;\n    color: #155724; /* Texto verde oscuro para tareas completadas */\n    border-color: #c3e6cb; /* Borde verde claro */\n    transition: background-color 0.3s ease, color 0.3s ease;\n}\n\n/* Estilos para el botón de eliminar */\nli button.delete {\n    background-color: #ff6b6b; /* Fondo rojo para el botón de eliminar */\n    color: white;\n    border: none;\n    border-radius: 50%;\n    padding: 10px;\n    cursor: pointer;\n    transition: background-color 0.3s ease, transform 0.2s ease;\n}\n\nli button.delete:hover {\n    background-color: #e63946; /* Fondo rojo más oscuro en hover */\n    transform: scale(1.1); /* Aumenta ligeramente el tamaño en hover */\n}\n\nli button.delete:active {\n    background-color: #c71f37; /* Fondo rojo aún más oscuro al presionar */\n    transform: scale(1); /* Regresa al tamaño original */\n}\n\n/* Animación para eliminar la tarea */\nli.removing {\n    opacity: 0; /* Desvanece la tarea antes de eliminarla */\n    transform: translateX(100%); /* Desplaza la tarea hacia la derecha */\n    transition: opacity 0.4s ease, transform 0.4s ease; /* Animación suave */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



document.addEventListener("DOMContentLoaded", function () {
  (0,_ui__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
  document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var taskInput = document.getElementById("task-input").value;
    if (taskInput !== "") {
      (0,_task__WEBPACK_IMPORTED_MODULE_1__.addTask)(taskInput);
      (0,_ui__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
      //limpiar el cuadro de texto
      document.getElementById("task-input").value = "";
    }
  });
  document.getElementById("task-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      var taskId = e.target.parentElement.getAttribute("data-id");
      (0,_task__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(taskId);
      (0,_ui__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
    }
    if (e.target.classList.contains("toggle")) {
      var _taskId = e.target.parentElement.getAttribute("data-id");
      (0,_task__WEBPACK_IMPORTED_MODULE_1__.toggleTask)(_taskId);
      (0,_ui__WEBPACK_IMPORTED_MODULE_2__.renderTasks)();
    }
  });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map
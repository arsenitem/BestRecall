export default {
    type: "object",
        properties: {
          name: {
            type: "string",
            ui: {
              columns: 6,
              label: "ФИО Пациента",
              placeholder: "ФИО",
              widgetConfig: {
                showState: true,
              },
            },
           
            rules: {
              required: {
                value: true, // The value passed to the validation rule
                errMsg: "Требуется заполнить данное поле", // Error message
              },
            },
            value: ""
          }, 
          date: {
            type: "date",
            ui: {
              columns: 3,
              label: "Дата рождения",
              placeholder: "",
              widget: "datepicker",
              widgetConfig: {
                showState: true,
                format: "DD.MM.YYYY",
                allowInput: true,
              }
            },
            rules: {
              required: {
                value: true,
                errMsg: "Необходимо указать" 
              }
            },
            value: null
          },
          sex: {
            type: "number",
            ui: {
              label: "Пол",
              columns: 3,
              widget: "radio",
              widgetConfig: {
                name: "manyrad",
                options: [
                  {
                    value: "М",
                    text: "М"
                  },
                  {
                    value: "Ж",
                    text: "Ж"
                  }
                ]
              }
            }
          },
          email: {
            type: "string",
            ui: {
              columns: 6,
              label: "Email",
              placeholder: "",
              widgetConfig: {
                showState: true,
              }
            },
            rules: {
              required: {
                value: true,
                errMsg: "Необходимо указать" 
              },
              email: {
                value: true,
                errMsg: "Неверный email" 
              }
            },
            value: null
          },
          phone: {
            type: "string",
            ui: {
              columns: 6,
              label: "Номер телефона",
              placeholder: "",
              widgetConfig: {
                showState: true,
              }
            },
            rules: {
              required: {
                value: true,
                errMsg: "Необходимо указать" 
              },
            },
            value: null
          },
          snils: {
            type: "string",
            ui: {
              columns: 6,
              label: "CНИЛС",
              placeholder: "",
              widgetConfig: {
                showState: true,
              }
            },
            rules: {
              required: {
                value: true,
                errMsg: "Необходимо указать" 
              },
            },
            value: null
          },
          oms: {
            type: "string",
            ui: {
              columns: 6,
              label: "Полис ОМС",
              placeholder: "",
              widgetConfig: {
                showState: true,
              }
            },
            rules: {
              required: {
                value: true,
                errMsg: "Необходимо указать" 
              },
            },
            value: null
          },
          reg_address: {
            type: "string",
            ui: {
              columns: 6,
              label: "Адрес регистрации",
              placeholder: "",
              widget: "textarea",
              widgetConfig: {
                showState: true,
              }
            },
            value: null
          },
          fact_address: {
            type: "string",
            ui: {
              columns: 6,
              label: "Адрес места жительства",
              placeholder: "",
              widget: "textarea",
              widgetConfig: {
                showState: true,
              }
            },
            value: null
          },
          invalid: {
            type: "string",
            ui: {
              columns: 12,
              label: "Инвалидность",
              placeholder: "",
              widgetConfig: {
                showState: true,
              }
            },
            value: null
          },
          work_place: {
            type: "string",
            ui: {
              columns: 6,
              label: "Место работы",
              placeholder: "",
              widgetConfig: {
                showState: true,
              }
            },
            value: null
          },
          work_pos: {
            type: "string",
            ui: {
              columns: 6,
              label: "Должность",
              placeholder: "",
              widgetConfig: {
                showState: true,
              }
            },
            value: null
          },
          diagnosis: {
            type: "string",
            ui: {
              columns: 12,
              label: "Клинический диагноз",
              placeholder: "",
              widget: "textarea",
              widgetConfig: {
                showState: true,
              }
            },
            value: null
          },
          
        },
        value: {},
}
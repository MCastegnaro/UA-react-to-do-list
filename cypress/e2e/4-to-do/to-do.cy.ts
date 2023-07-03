import { expect } from "chai";

before(() => {
  cy.viewport("macbook-15");
  cy.visit("http://localhost:3000/to-do");

  cy.get("._img_14eu5_85").each(($botao, index) => {
    cy.wait(20 * index).then(() => {
      cy.wrap($botao).click();
    });
  });
});

beforeEach(() => {
  cy.viewport("macbook-15");
  cy.visit("http://localhost:3000/to-do");
});

describe("<To Do>", () => {
  context("Quando acessar a pagina de listagem de tarefas do projeto", () => {
    it("Deve exibir o header do sistema", () => {
      cy.get('[data-testid="header"]').should("be.visible");
    });

    it("Deve exibir uma imagem de logo do sistema", () => {
      cy.get("._img_h3s54_21").should("be.visible");
    });

    it("Deve exibir a frase 'Tarefas Criadas'", () => {
      cy.get("._tasks_created_x3dtl_159").should("contain", "Tarefas Criadas");
    });

    it("O botão de 'Criar' deve estar DESABILITADO", () => {
      cy.get("._button_x3dtl_75").should("be.disabled");
    });

    describe("E acessar a barra de escrever", () => {
      it("Deve digitar na barra de adicionar tarefas", () => {
        cy.get("._input_x3dtl_21").type("Testando a barrinha");
      });

      describe("E estiver com algo escrito na barra", () => {
        it("O botão de 'Criar' deve estar HABILITADO", () => {
          cy.get("input").type("Testando o botão");
          cy.get("._button_x3dtl_75").should("be.enabled");
        });

        it("O botão de 'Criar' deve estar FUNCIONANDO", () => {
          cy.get("input").type("Testando o botão");
          cy.wait(2000).then(() => {
            cy.get("._button_x3dtl_75").click();
            cy.get("main").should("contain", "Testando o botão");
          });
        });
      });
    });

    describe("Com pelo menos uma task criada", () => {
      it("Deve haver um botão de lixeira visível no container da task criada", () => {
        cy.get("._img_14eu5_85").should("be.visible");
      });

      it("Deve conter um círculo representando o status da tarefa dentro do container de uma tarefa criada", () => {
        cy.get(
          '._section_container_14eu5_1 > :nth-child(1) input[type="checkbox"]'
        );
      });

      it("O Circulo dentro do container da tarefa deve estar visível", () => {
        cy.get(
          '._section_container_14eu5_1 > :nth-child(1) input[type="checkbox"]'
        ).should("be.visible");
      });

      it("O Circulo dentro do container da tarefa deve mudar ao ser clicado", () => {
        cy.get(
          '._section_container_14eu5_1 > :nth-child(1) input[type="checkbox"]'
        )
          .should(($checkbox) => {
            expect($checkbox[0].checked).to.be.false;
          })
          .click()
          .should(($checkbox) => {
            expect($checkbox[0].checked).to.be.true;
          });
      });

      it("O valor do contador de tarefas feitas se altera quando um circulo é clicado", () => {
        let contadorInicial: number;

        cy.wait(1000).then(() => {
          cy.get(":nth-child(2) > ._span_value_x3dtl_191").then((element) => {
            contadorInicial = parseInt(element.text());
            cy.get(
              '._section_container_14eu5_1 > :nth-child(1) input[type="checkbox"]'
            ).click();

            cy.get(":nth-child(2) > ._span_value_x3dtl_191").should(
              (element) => {
                const contadorAtual = parseInt(element.text(), 10);
                expect(contadorAtual).to.be.greaterThan(contadorInicial);
              }
            );
          });
        });
      });
    });

    it("O valor do contador de tarefas AUMENTA ao ser adicionada uma tarefa nova", () => {
      let contadorInicial: number;

      cy.get("input").type("Testando o Contador");

      cy.wait(3000).then(() => {
        cy.get(":nth-child(1) > ._span_value_x3dtl_191").then((element) => {
          contadorInicial = parseInt(element.text());
          cy.get("._button_x3dtl_75").click();

          cy.get(":nth-child(1) > ._span_value_x3dtl_191").should((element) => {
            const contadorAtual = parseInt(element.text(), 10);
            expect(contadorAtual).to.be.not.equal(contadorInicial);
          });
        });
      });
    });

    it("O valor do contador de tarefas DIMINUI ao ser EXCLUIDA uma tarefa", () => {
      let contadorInicial: number;

      cy.get("input").type("Testando o Contador");

      cy.wait(2000).then(() => {
        cy.get("._button_x3dtl_75").click();
        cy.wait(1000).then(() => {
          cy.get(":nth-child(1) > ._span_value_x3dtl_191").then((element) => {
            contadorInicial = parseInt(element.text());
            cy.get(":nth-child(1) > ._img_14eu5_85").click();
            cy.wait(1000).then(() => {
              cy.get(":nth-child(1) > ._span_value_x3dtl_191").should(
                (element) => {
                  const contadorAtual = parseInt(element.text(), 10);
                  expect(contadorAtual).to.be.lessThan(contadorInicial);
                }
              );
            });
          });
        });
      });
    });
  });
});

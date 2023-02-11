function Calculadora() {

  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.pressionaEnter();
  };

  this.capturaCliques = () => {
    document.addEventListener('click', event =>{
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if(el.classList.contains('btn-clear')) this.clear();
      if(el.classList.contains('btn-del')) this.del();
      if(el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.pressionaEnter = () => {
    document.addEventListener('keyup', e => {
    if(e.keyCode === 13){
      this.realizaConta();
    };
  });
  };

  this.realizaConta = () => {
    try{
      const conta = eval(this.display.value);
      if(!conta){
        alert('Conta inválida');
      };

      this.display.value = conta;
    } catch(e){
      alert("Conta inválida");
      return;
    };
  };


  this.del = () => this.display.value = this.display.value.slice(0, -1)
  this.clear = () => this.display.value = '';
  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  }

}

const calculadora = new Calculadora();
calculadora.inicia()
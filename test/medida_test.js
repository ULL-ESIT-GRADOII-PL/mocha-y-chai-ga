var expect = chai.expect;

describe("Medida", function () {
  describe("constructor", function() {
    it("Existe Constructor", function() {
      var medida = new Medida (32, 'f');
      expect(medida.valor).to.equal(32);
    });
    it("Puede recibir un solo parámetro", function() {
      var medida = new Medida ('32e-1 f');
      expect(medida.valor).to.equal(32e-1);
      expect(medida.tipo).to.equal('f');
    });
  });
  
  
  describe("Match", function () {
    it("¿Caza bien?", function () {
      var valor = Medida.match('320e-1 f to c');
      expect(parseFloat(valor.val)).to.equal(320e-1);
      expect(valor.tip).to.equal('f');
      expect(valor.para).to.equal('c');
    });
  });
  describe("Convertir", function () {
    it("¿Convierte Correctamente'", function() {
      var conv = Medida.convertir('320e-1 f to c');
      expect(conv).to.equal('0.00 Celsius');
    });
  });
});

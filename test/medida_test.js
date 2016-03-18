var expect = chai.expect;

describe("Medida", function () {
  describe("constructor", function() {
    it("Existe Constructor", function() {
      var medida = new Medida (32, 'f');
      expect(medida.valor).to.equal(32);
    });
    it("Puede recibir un solo parámetro", function() {
      var medida = new Medida ('32f');
      expect(medida.valor).to.equal(32);
      expect(medida.tipo).to.equal('f');
    });
  });


  describe("Match", function () {
    it("¿Caza bien?", function () {
      var valor = Medida.match('320e-1f to c');
      expect(parseFloat(valor.numero)).to.equal(320e-1);
      expect(valor.tipo).to.equal('f');
      expect(valor.destino).to.equal('c');
    });
  });
  describe("Convertir", function () {
    it("¿Convierte Correctamente'", function() {
      var conv = Medida.convertir('320e-1f to c');
      expect(conv).to.equal('0.0 C');
    });
  });
});

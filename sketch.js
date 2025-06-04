function setup() {
  createCanvas(600, 400); // Tela menor para simplificar
}

function draw() {
  background(135, 206, 235); // Céu azul claro

  // --- Elementos do Campo ---
  fill(80, 150, 60); // Verde para a base do campo
  rect(0, height * 0.7, width / 2, height * 0.3); // Parte do campo

  // Árvore simples
  fill(120, 80, 40); // Marrom para o tronco
  rect(width * 0.2, height * 0.55, 15, 60);
  fill(60, 120, 40); // Verde para a copa
  ellipse(width * 0.2 + 7.5, height * 0.55, 60, 70);

  // --- Elementos da Cidade ---
  fill(150, 150, 150); // Cinza para a base da cidade
  rect(width / 2, height * 0.7, width / 2, height * 0.3); // Parte da cidade

  // Prédio simples
  fill(100, 100, 100); // Cinza mais escuro para o prédio
  rect(width * 0.75, height * 0.4, 80, 180);
  fill(255, 255, 0, 200); // Janela amarela
  rect(width * 0.75 + 15, height * 0.4 + 15, 20, 30);
  rect(width * 0.75 + 45, height * 0.4 + 15, 20, 30);

  // --- Linha divisória e conexão ---
  noFill();
  stroke(50, 50, 50); // Cor da estrada
  strokeWeight(10);
  // Curva que separa e conecta campo e cidade
  bezier(
    0,
    height * 0.7,
    width * 0.2,
    height * 0.6,
    width * 0.8,
    height * 0.8,
    width,
    height * 0.7
  );

  // --- Texto ---
  fill(0); // Cor do texto
  textSize(24);
  textAlign(CENTER);
  text("Conexão Campo & Cidade", width / 2, 50);
}

const canvas = document.getElementById('explosionCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function Particle(x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
      this.alpha = 1;
    }

    Particle.prototype.draw = function () {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    Particle.prototype.update = function () {
      this.draw();
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.alpha -= 0.01;
    };

    function createExplosion(x, y) {
      const particles = [];
      const numberOfParticles = 30;

      for (let i = 0; i < numberOfParticles; i++) {
        const angle = (Math.PI * 2) * (i / numberOfParticles);
        const velocity = {
          x: Math.cos(angle) * (Math.random() * 5 + 2),
          y: Math.sin(angle) * (Math.random() * 5 + 2)
        };
        particles.push(new Particle(x, y, 5, 'orange', velocity));
      }

      return particles;
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Display the word "earth" before the explosion
      ctx.font = "40px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("earth", canvas.width / 2 - 50, canvas.height / 2 - 50);

      // Display clickable text before the explosion
      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("Click here to explode", canvas.width / 2 - 100, canvas.height / 2 - 30);

      particles.forEach((particle, index) => {
        if (particle.alpha > 0) {
          particle.update();
        } else {
          particles.splice(index, 1);
        }
      });
    }

    let particles = [];

    window.addEventListener('click', (e) => {
      const { clientX, clientY } = e;
      particles = particles.concat(createExplosion(clientX, clientY));
    });
    ctx.fillText("Click here to explode", canvas.width / 2 - 100, canvas.height / 2 - 30);
    animate();
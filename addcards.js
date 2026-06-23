const oM = [
    {
      id: 0,
      name: "UKGTALK - Workforce Management Platform",
      description: "Enterprise-grade cloud-native microservices leveraging Java Spring Boot and Node.js on GCP with Docker/Kubernetes orchestration, achieving 99.9% uptime for Fortune 500 clientele",
      image: "images/projects/projecthub.png",
      tags: ["java", "nodejs", "gcp", "kubernetes"],
      liveview: "https://www.ultimatekronos.com/",
      alt: "UKGTALK Workforce Management Platform",
    },
    {
      id: 1,
      name: "Financial Communication APIs",
      description: "Robust financial communication APIs utilizing Node.js and Vue.js with MySQL backend, incorporating sophisticated rate limiting and comprehensive error handling mechanisms",
      image: "images/projects/krushigram.png",
      tags: ["nodejs", "vue", "mysql", "api"],
      liveview: null,
      alt: "Financial Communication APIs",
    },
    {
      id: 2,
      name: "Messaging Template Engine",
      description: "Advanced messaging template engine with GitLab CI/CD automation, achieving 40% reduction in query latency for high-volume messaging workflows",
      image: "images/projects/studybuddy.jpeg",
      tags: ["nodejs", "mongodb", "cicd", "gitlab"],
      liveview: null,
      alt: "Messaging Template Engine",
    },
    {
      id: 3,
      name: "Full-Stack Web Applications",
      description: "Comprehensive full-stack web applications utilizing Node.js and Angular with sophisticated real-time capabilities and advanced query optimization",
      image: "images/projects/opentalk.jpeg",
      tags: ["nodejs", "angular", "mysql", "realtime"],
      liveview: null,
      alt: "Full-Stack Web Applications",
    },
    {
      id: 4,
      name: "Microservices Architecture",
      description: "Enterprise-scale microservices with advanced CQRS patterns, sophisticated Docker/Kubernetes orchestration, and 99.9% uptime SLA",
      image: "images/projects/randomizer.jpg",
      tags: ["spring boot", "kubernetes", "docker", "cqrs"],
      liveview: null,
      alt: "Microservices Architecture",
    },
    {
      id: 5,
      name: "Cloud Infrastructure Optimization",
      description: "Strategic cost optimization across GCP infrastructure through intelligent resource right-sizing and automated scaling policies, reducing costs by 15%",
      image: "images/projects/cryptotracker.png",
      tags: ["gcp", "devops", "infrastructure", "optimization"],
      liveview: null,
      alt: "Cloud Infrastructure Optimization",
    },
    {
      id: 6,
      name: "Observability & Monitoring",
      description: "Comprehensive observability infrastructure utilizing Prometheus and Stackdriver monitoring, achieving 40% reduction in MTTR and 30% improvement in availability",
      image: "images/projects/weatherapp.png",
      tags: ["prometheus", "stackdriver", "monitoring", "logging"],
      liveview: null,
      alt: "Observability & Monitoring",
    },
  ];
  
  class lM {
    constructor() {
      he(this, "domElements", {
        renderContainer: document.getElementById("work-render-container"),
      });
      (this.experience = new ye()),
        (this.sounds = this.experience.sounds),
        (this.items = oM),
        (this.tags = aM),
        this.renderItems();
    }
  
    renderItems() {
      this.items.forEach((e) => {
        this.domElements.renderContainer.insertAdjacentHTML(
          "beforeend",
          `
              <div id="work-item-${e.id}" class="work-item-container column">
                  <img class="work-item-image" src="${e.image}" alt="${
            e.alt
          }" height="300" width="334"/>
                  <div class="work-item-content-container">
                      <h3>${e.name}</h3>
                      <div class="work-item-tag-container row">
                          ${this.renderTags(e.tags)}
                      </div>
                      <span>${e.description}</span>
                  </div>
                  <div class="work-item-button-container row">
                      ${this.renderButtons(e)}
                  </div>
                  ${e.bannerIcons ? this.renderBanner(e) : ""}
              </div>
              `
        ),
          this.addEventListenersToCard(e);
      });
    }
  
    renderBanner(e) {
      let t = "";
      return (
        (t = `
              <div class="work-banner-container row center">
                  ${e.bannerIcons.map(
                    (n) =>
                      `<img src="${n.src}" alt="${n.alt}" height="64" width="64"/>`
                  )}
                  <span>Website Of<br>The Day</span>
              </div>
          `),
        t
      );
    }
  
    renderButtons(e) {
      // Only the Live View button will be rendered if available
      let t = "";
      if (e.liveview) {
        t = `
          <div id="work-item-orange-button-${e.id}" class="work-item-orange-button small-button center orange-hover" style="width: 100%; margin: 0;">
              Live View
          </div>`;
      } else {
        t = `
          <div id="work-item-gray-button-${e.id}" class="work-item-gray-button center" style="width: 100%; background: #a7adb8; cursor: unset;">
              Work in progress
          </div>`;
      }
      return t;
    }
  
    renderTags(e) {
      let t = "";
      for (let n = 0; n < e.length; n++) t += this.tags[e[n]];
      return t;
    }
  
    addEventListenersToCard(e) {
      const t = document.getElementById("work-item-" + e.id);
      t.addEventListener("click", () => {
        t.classList.contains("work-inactive-item-container") &&
          document
            .getElementById("work-item-0")
            .classList.contains("work-item-container-transition") &&
          ((this.experience.ui.work.cards.currentItemIndex = -e.id + 4),
          this.experience.ui.work.cards.updatePositions(),
          this.sounds.play("buttonClick"));
      });
  
      if (e.liveview) {
        document
          .getElementById("work-item-orange-button-" + e.id)
          .addEventListener("click", () => {
            window.open(e.liveview, "_blank").focus();
          });
      }
    }
  }
  
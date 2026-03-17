import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

interface Project {
  title: string;
  image: string;
  description: string;
  deployLink?: string;
  technologies: { src: string; alt: string }[];
  aosDuration: number;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Gestão de Mentoria',
      image: '/project-gdm.png',
      description: 'Participei do desenvolvimento <span>front-end</span> do <span>GDM</span>. Projeto para gerir a <span>Creath Academy</span>, onde tem o sistema dos mentores e mentorados, podendo ver suas atividades, ver seus projetos, marcar eventos, visualizar eventos, modificar suas informações, etc.',
      technologies: [
        { src: 'icons/angularIcon.webp', alt: 'Angular' },
        { src: 'icons/tsIcon.png', alt: 'TypeScript' },
        { src: 'icons/tailwindIcon.svg', alt: 'Tailwind' },
        { src: 'icons/gitIcon.png', alt: 'Git' },
        { src: 'icons/figmaIcon.webp', alt: 'Figma' },
        { src: 'icons/JiraIcon.webp', alt: 'Jira' }
      ],
      aosDuration: 800
    },
    {
      title: 'DAI',
      image: '/project-dai-at.png',
      description: 'Fui <span>desenvolvedor front-end</span> do sistema da <span>DAI</span> e <span>Gestor de Automação com I.A</span>. A <span>DAI</span> consiste em um sistema de <span>inteligência artificial</span> utilizando <span>RAG</span>, que aprende as características que o usuário desejar, criando um assistente inteligente virtual.',
      deployLink: 'https://dai.tec.br/',
      technologies: [
        { src: 'icons/nextjsIcon.png', alt: 'Next.js' },
        { src: 'icons/tsIcon.png', alt: 'TypeScript' },
        { src: 'icons/tailwindIcon.svg', alt: 'Tailwind' },
        { src: 'icons/gitIcon.png', alt: 'Git' },
        { src: 'icons/figmaIcon.webp', alt: 'Figma' },
        { src: 'icons/JiraIcon.webp', alt: 'Jira' }
      ],
      aosDuration: 1000
    },
    {
      title: 'Pet Sitter Finder',
      image: '/project-fps.png',
      description: 'Fui desenvolvedor <span>front-end</span> do <span>Pet Sitter Finder</span>. <span>Pet Sitter Finder</span> consiste em uma rede social onde pessoas interessadas em achar um cuidador para o seu animal, encontra <span>pet-sitters</span> dispostos a negociação.',
      technologies: [
        { src: 'icons/angularIcon.webp', alt: 'Angular' },
        { src: 'icons/tsIcon.png', alt: 'TypeScript' },
        { src: 'icons/tailwindIcon.svg', alt: 'Tailwind' },
        { src: 'icons/gitIcon.png', alt: 'Git' },
        { src: 'icons/figmaIcon.webp', alt: 'Figma' }
      ],
      aosDuration: 1200
    },
    {
      title: 'Portfolio',
      image: '/project-portfolio.png',
      description: 'Este projeto é uma página pessoal dedicada a apresentar minha <span>trajetória profissional</span>, <span>competências</span> e <span>informações de contato</span>. A página está projetada para destacar minhas <span>experiências</span>, <span>habilidades</span> e <span>conquistas</span> de forma clara e atraente.',
      deployLink: 'https://lucasalberto.site/',
      technologies: [
        { src: 'icons/angularIcon.webp', alt: 'Angular' },
        { src: 'icons/tsIcon.png', alt: 'TypeScript' },
        { src: 'icons/tailwindIcon.svg', alt: 'Tailwind' },
        { src: 'icons/sassIcon.webp', alt: 'Sass' },
        { src: 'icons/gitIcon.png', alt: 'Git' }
      ],
      aosDuration: 1400
    },
    {
      title: 'Guadalupe',
      image: '/project-guadalupe.png',
      description: 'Desenvolvi uma réplica da landing page do site do <span>Restaurante Mexicano Guadalupe (Santos-SP)</span>, com foco em modernidade, usabilidade e experiência do usuário, seguindo fielmente ao design original.',
      deployLink: 'https://lp-guadalupe-alberto.vercel.app/',
      technologies: [
        { src: 'icons/htmlIcon.png', alt: 'HTML' },
        { src: 'icons/cssIcon.png', alt: 'CSS' },
        { src: 'icons/javascriptIcon.png', alt: 'JavaScript' },
        { src: 'icons/bootstrapIcon.svg', alt: 'Bootstrap' },
        { src: 'icons/gitIcon.png', alt: 'Git' }
      ],
      aosDuration: 1400
    },
    {
      title: 'Haverim',
      image: '/project-haverim.png',
      description: 'Recriei a landing page do site da <span>Haverim (Santos-SP)</span>, com uma proposta visual mais moderna e navegação otimizada para oferecer uma experiência mais intuitiva e envolvendo ao usuário, seguindo fielmente ao design original.',
      deployLink: 'https://lp-haverim.vercel.app/',
      technologies: [
        { src: 'icons/htmlIcon.png', alt: 'HTML' },
        { src: 'icons/cssIcon.png', alt: 'CSS' },
        { src: 'icons/javascriptIcon.png', alt: 'JavaScript' },
        { src: 'icons/bootstrapIcon.svg', alt: 'Bootstrap' },
        { src: 'icons/gitIcon.png', alt: 'Git' }
      ],
      aosDuration: 1400
    }
  ];

  selectedProject: Project | null = null;
  isModalOpen = false;

  openModal(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    setTimeout(() => {
      this.selectedProject = null;
      document.body.style.overflow = 'auto';
    }, 300);
  }
}

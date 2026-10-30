import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
  HostListener
} from '@angular/core';

interface Project {
  title: string;
  image?: string;
  cardImage?: string;
  images?: string[];
  description: string;
  deployLink?: string;
  repoLink?: string;
  repoLinkBack?: string;
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
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Project[] = [
    {
      title: 'Gestão de Mentoria',
      image: '/project-gdm.webp',
      cardImage: '/project-gdm-640.webp',
      description: 'Participei do desenvolvimento <span>front-end</span> do <span>GDM</span>. Projeto para gerir a <span>Creath Academy</span>, onde tem o sistema dos mentores e mentorados, podendo ver suas atividades, ver seus projetos, marcar eventos, visualizar eventos, modificar suas informações, etc.',
      technologies: [
        { src: 'icons/angularIcon.webp', alt: 'Angular' },
        { src: 'icons/tsIcon.webp', alt: 'TypeScript' },
        { src: 'icons/tailwindIcon.svg', alt: 'Tailwind' },
        { src: 'icons/gitIcon.webp', alt: 'Git' },
        { src: 'icons/figmaIcon.webp', alt: 'Figma' },
        { src: 'icons/JiraIcon.webp', alt: 'Jira' }
      ],
      aosDuration: 800
    },
    {
      title: 'DAI',
      image: '/project-dai-at.webp',
      cardImage: '/project-dai-at-640.webp',
      description: 'Fui <span>desenvolvedor front-end</span> do sistema da <span>DAI</span> e <span>Gestor de Automação com I.A</span>. A <span>DAI</span> consiste em um sistema de <span>inteligência artificial</span> utilizando <span>RAG</span>, que aprende as características que o usuário desejar, criando um assistente inteligente virtual.',
      deployLink: 'https://dai.tec.br/',
      technologies: [
        { src: 'icons/nextjsIcon.webp', alt: 'Next.js' },
        { src: 'icons/tsIcon.webp', alt: 'TypeScript' },
        { src: 'icons/tailwindIcon.svg', alt: 'Tailwind' },
        { src: 'icons/gitIcon.webp', alt: 'Git' },
        { src: 'icons/figmaIcon.webp', alt: 'Figma' },
        { src: 'icons/JiraIcon.webp', alt: 'Jira' }
      ],
      aosDuration: 1000
    },
    {
      title: 'Pet Sitter Finder',
      image: '/project-fps.webp',
      cardImage: '/project-fps-640.webp',
      description: 'Fui desenvolvedor <span>front-end</span> do <span>Pet Sitter Finder</span>. <span>Pet Sitter Finder</span> consiste em uma rede social onde pessoas interessadas em achar um cuidador para o seu animal, encontra <span>pet-sitters</span> dispostos a negociação.',
      technologies: [
        { src: 'icons/angularIcon.webp', alt: 'Angular' },
        { src: 'icons/tsIcon.webp', alt: 'TypeScript' },
        { src: 'icons/tailwindIcon.svg', alt: 'Tailwind' },
        { src: 'icons/gitIcon.webp', alt: 'Git' },
        { src: 'icons/figmaIcon.webp', alt: 'Figma' }
      ],
      aosDuration: 1200
    },
    {
      title: 'Portfolio',
      image: '/project-portfolio.webp',
      cardImage: '/project-portfolio-640.webp',
      description: 'Este projeto é uma página pessoal dedicada a apresentar minha <span>trajetória profissional</span>, <span>competências</span> e <span>informações de contato</span>. A página está projetada para destacar minhas <span>experiências</span>, <span>habilidades</span> e <span>conquistas</span> de forma clara e atraente.',
      deployLink: 'https://lucasalberto.online',
      repoLink: 'https://github.com/LucasAlberto0/portfolio-alberto',
      technologies: [
        { src: 'icons/angularIcon.webp', alt: 'Angular' },
        { src: 'icons/tsIcon.webp', alt: 'TypeScript' },
        { src: 'icons/tailwindIcon.svg', alt: 'Tailwind' },
        { src: 'icons/sassIcon.webp', alt: 'Sass' },
        { src: 'icons/gitIcon.webp', alt: 'Git' }
      ],
      aosDuration: 1400
    },
    {
      title: 'Guadalupe',
      image: '/project-guadalupe.webp',
      cardImage: '/project-guadalupe-640.webp',
      description: 'Desenvolvi uma réplica da landing page do site do <span>Restaurante Mexicano Guadalupe (Santos-SP)</span>, com foco em modernidade, usabilidade e experiência do usuário, seguindo fielmente ao design original.',
      deployLink: 'https://lp-guadalupe-alberto.vercel.app/',
      repoLink: 'https://github.com/LucasAlberto0/LP-Guadalupe',
      technologies: [
        { src: 'icons/htmlIcon.webp', alt: 'HTML' },
        { src: 'icons/cssIcon.webp', alt: 'CSS' },
        { src: 'icons/javascriptIcon.webp', alt: 'JavaScript' },
        { src: 'icons/bootstrapIcon.svg', alt: 'Bootstrap' },
        { src: 'icons/gitIcon.webp', alt: 'Git' }
      ],
      aosDuration: 1400
    },
    {
      title: 'Haverim',
      image: '/project-haverim.webp',
      cardImage: '/project-haverim-640.webp',
      description: 'Recriei a landing page do site da <span>Haverim (Santos-SP)</span>, com uma proposta visual mais moderna e navegação otimizada para oferecer uma experiência mais intuitiva e envolvendo ao usuário, seguindo fielmente ao design original.',
      deployLink: 'https://lp-haverim.vercel.app/',
      repoLink: 'https://github.com/LucasAlberto0/LP-Haverim',
      technologies: [
        { src: 'icons/htmlIcon.webp', alt: 'HTML' },
        { src: 'icons/cssIcon.webp', alt: 'CSS' },
        { src: 'icons/javascriptIcon.webp', alt: 'JavaScript' },
        { src: 'icons/bootstrapIcon.svg', alt: 'Bootstrap' },
        { src: 'icons/gitIcon.webp', alt: 'Git' }
      ],
      aosDuration: 1400
    },
    {
      title: 'Construtiva',
      image: '/project-construtiva.webp',
      cardImage: '/project-construtiva-640.webp',
      description: 'Criei o projeto <span>Construtiva</span> para a empresa <span>Medeiros e Pinheiros</span>, um sistema de <span>gerenciamento de obras</span> com controle de <span>diários</span>, <span>faturamento</span>, <span>clientes</span> e <span>andamento</span>, com níveis de acesso para <span>Gerente</span>, <span>Admin</span> e <span>Fiscal</span>, além da implementação de um <span>assistente de IA</span> com <span>RAG</span> utilizando as informações da empresa.',
      deployLink: 'https://construtivamp.vercel.app',
      repoLink: 'https://github.com/LucasAlberto0/ConstrutivaFront',
      repoLinkBack: 'https://github.com/LucasAlberto0/construtivaBack',
      technologies: [
        { src: 'icons/angularIcon.webp', alt: 'Angular' },
        { src: 'icons/tsIcon.webp', alt: 'TypeScript' },
        { src: 'icons/netIcon.svg', alt: '.Net' },
        { src: 'icons/sassIcon.webp', alt: 'Sass' },
        { src: 'icons/postgresqlIcon.svg', alt: 'PostgreSql' },
        { src: 'icons/gitIcon.webp', alt: 'Git' }
      ],
      aosDuration: 1400
    },
    {
      title: 'Popblitz',
      image: '/project-popblitz.webp',
      cardImage: '/project-popblitz-640.webp',
      description: '<span>Popblitz</span> é um jogo <span>multiplayer</span> (2 a 16 jogadores) de adivinhação com <span>imagens</span>, <span>músicas</span> e perguntas de <span>cultura pop</span>, onde os jogadores precisam identificar corretamente o <span>filme</span>, <span>série</span>, <span>jogo</span> ou <span>personalidade</span> de cada rodada.',
      deployLink: 'https://popblitz.vercel.app',
      repoLink: 'https://github.com/LucasAlberto0/popblitz',
      technologies: [
        { src: 'icons/nextjsIcon.webp', alt: 'Next.js' },
        { src: 'icons/supabaseIcon.svg', alt: 'Supabase' },
        { src: 'icons/tailwindIcon.svg', alt: 'Tailwind' },
        { src: 'icons/gitIcon.webp', alt: 'Git' }
      ],
      aosDuration: 1400
    },
    {
      title: 'Neuroly',
      images: [
        '/project-neurolyapp1.webp',
        '/project-neurolyapp2.webp',
        '/project-neurolyapp3.webp'
      ],
      description: '<span>Neuroly</span> é uma plataforma gamificada focada em aprimorar as funções cognitivas através de <span>mini-jogos diários</span>. Com uma experiência <span>Cyber-Cognitive</span> premium e imersiva, ele atua como um hub de evolução mental, monitorando memória, atenção e agilidade.',
      technologies: [
        { src: 'icons/flutterIcon.webp', alt: 'Flutter' },
        { src: 'icons/gitIcon.webp', alt: 'Git' }
      ],
      aosDuration: 1600
    }
  ];

  selectedProject: Project | null = null;
  isModalOpen = false;

  carouselProjects: Project[] = [];
  activeIndex = 18;

  @ViewChild('carousel') carouselRef?: ElementRef<HTMLElement>;

  isMouseDown = false;
  isTouchActive = false;
  startX = 0;
  scrollLeftStart = 0;
  dragged = false;
  private loopTimeout: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.carouselProjects = [
      ...this.projects,
      ...this.projects,
      ...this.projects,
      ...this.projects,
      ...this.projects
    ];
    this.activeIndex = 18;
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.centerActiveCard(false);
      }, 100);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (isPlatformBrowser(this.platformId) && window.innerWidth <= 767) {
      this.centerActiveCard(false);
    }
  }

  centerActiveCard(smooth: boolean = false): void {
    const container = this.carouselRef?.nativeElement;
    if (!container) return;
    const cards = container.children;
    if (!cards || !cards[this.activeIndex]) return;

    const targetCard = cards[this.activeIndex] as HTMLElement;
    const scrollTarget = targetCard.offsetLeft - (container.clientWidth - targetCard.offsetWidth) / 2;

    if (!smooth) {
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = scrollTarget;
      container.style.scrollBehavior = '';
    } else {
      container.scrollTo({ left: scrollTarget, behavior: 'smooth' });
    }
  }

  onMouseDown(e: MouseEvent, container: HTMLElement) {
    if (typeof window !== 'undefined' && window.innerWidth > 767) return;
    this.isMouseDown = true;
    this.dragged = false;
    this.startX = e.pageX - container.offsetLeft;
    this.scrollLeftStart = container.scrollLeft;
  }

  onMouseMove(e: MouseEvent, container: HTMLElement) {
    if (!this.isMouseDown) return;
    const x = e.pageX - container.offsetLeft;
    const walk = x - this.startX;
    if (Math.abs(walk) > 6) {
      this.dragged = true;
      container.scrollLeft = this.scrollLeftStart - walk;
    }
  }

  onMouseUp(container?: HTMLElement) {
    this.isMouseDown = false;
    if (container) {
      this.checkInfiniteLoop(container);
    }
  }

  onMouseLeave(container?: HTMLElement) {
    this.isMouseDown = false;
    if (container) {
      this.checkInfiniteLoop(container);
    }
  }

  onTouchStart() {
    this.isTouchActive = true;
    this.dragged = false;
  }

  onTouchMove() {
    this.dragged = true;
  }

  onTouchEnd(container?: HTMLElement) {
    this.isTouchActive = false;
    if (container) {
      this.checkInfiniteLoop(container);
    }
  }

  onScroll(container: HTMLElement) {
    if (typeof window !== 'undefined' && window.innerWidth > 767) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    const cards = container.children;
    let closestIndex = this.activeIndex;
    let minDiff = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(containerCenter - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    }

    if (this.activeIndex !== closestIndex) {
      this.activeIndex = closestIndex;
    }

    this.checkInfiniteLoop(container);
  }

  checkInfiniteLoop(container: HTMLElement) {
    if (this.isMouseDown || this.isTouchActive) return;

    clearTimeout(this.loopTimeout);
    this.loopTimeout = setTimeout(() => {
      this.normalizeCarouselPosition(container);
    }, 150);
  }

  normalizeCarouselPosition(container: HTMLElement) {
    const cards = container.children;
    if (!cards || cards.length === 0) return;

    let targetIndex = this.activeIndex;
    if (targetIndex >= 27) {
      while (targetIndex >= 27) {
        targetIndex -= 9;
      }
    } else if (targetIndex < 18) {
      while (targetIndex < 18) {
        targetIndex += 9;
      }
    }

    if (targetIndex !== this.activeIndex && cards[targetIndex] && cards[this.activeIndex]) {
      const currentCard = cards[this.activeIndex] as HTMLElement;
      const targetCard = cards[targetIndex] as HTMLElement;
      const delta = targetCard.offsetLeft - currentCard.offsetLeft;

      container.style.scrollSnapType = 'none';
      container.style.scrollBehavior = 'auto';
      container.scrollLeft += delta;
      this.activeIndex = targetIndex;

      requestAnimationFrame(() => {
        container.style.scrollSnapType = '';
        container.style.scrollBehavior = '';
      });
    }
  }

  handleCardClick(project: Project) {
    if (this.dragged) {
      this.dragged = false;
      return;
    }
    this.openModal(project);
  }

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

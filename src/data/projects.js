export const projectsData = [
    { 
        id: 1,
        slug: 'web-design',
        fr: {
            title: 'Web Design', 
            category: 'Portfolio', 
            problem: "Le client avait un site vitrine vieillissant, lent au chargement et peu adapté aux mobiles, ce qui entraînait un fort taux de rebond.",
            solution: "Refonte complète avec Next.js pour de meilleures performances (SSR/SSG), design responsive modernisé et animations fluides via Framer Motion.",
            impact: "Diminution du taux de rebond de 40%, augmentation de la durée moyenne des sessions et retours très positifs sur l'esthétique.",
        },
        en: {
            title: 'Web Design', 
            category: 'Portfolio', 
            problem: "The client had an aging showcase site, slow to load and poorly adapted to mobile, resulting in a high bounce rate.",
            solution: "Complete redesign with Next.js for better performance (SSR/SSG), modernized responsive design, and smooth animations via Framer Motion.",
            impact: "40% decrease in bounce rate, increase in average session duration, and very positive feedback on aesthetics.",
        },
        image: '/project1.avif',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma']
    },
    { 
        id: 2,
        slug: 'app-development',
        fr: {
            title: 'App Development', 
            category: 'Application Mobile', 
            problem: "L'application existante souffrait de bugs fréquents et d'une interface peu intuitive, frustrant les utilisateurs réguliers.",
            solution: "Développement d'une nouvelle PWA avec React, intégration d'un state management robuste et refonte de l'UI/UX.",
            impact: "Augmentation de la rétention utilisateur de 25% et diminution drastique des tickets de support liés à des bugs d'interface.",
        },
        en: {
            title: 'App Development', 
            category: 'Mobile App', 
            problem: "The existing application suffered from frequent bugs and an unintuitive interface, frustrating regular users.",
            solution: "Development of a new PWA with React, integration of robust state management, and UI/UX redesign.",
            impact: "25% increase in user retention and drastic reduction in support tickets related to interface bugs.",
        },
        image: '/projet-2.jpg',
        technologies: ['React', 'Redux', 'PWA', 'Styled Components']
    },
    { 
        id: 3,
        slug: 'ui-ux-design',
        fr: {
            title: 'UI/UX Design', 
            category: 'Système de Design', 
            problem: "Incohérence visuelle sur les différentes plateformes de l'entreprise, ralentissant le travail des développeurs et des designers.",
            solution: "Création d'un Design System complet sur Figma et implémentation d'une librairie de composants React réutilisables.",
            impact: "Réduction du temps de développement des nouvelles fonctionnalités de 30% et standardisation de l'identité visuelle.",
        },
        en: {
            title: 'UI/UX Design', 
            category: 'Design System', 
            problem: "Visual inconsistency across the company's different platforms, slowing down the work of developers and designers.",
            solution: "Creation of a complete Design System in Figma and implementation of a reusable React component library.",
            impact: "30% reduction in development time for new features and standardization of visual identity.",
        },
        image: '/project3.png',
        technologies: ['Figma', 'React', 'Storybook', 'Tailwind CSS']
    },
    { 
        id: 4,
        slug: 'e-commerce',
        fr: {
            title: 'E-commerce', 
            category: 'Application Web', 
            problem: "Parcours d'achat complexe et tunnel de conversion trop long, entraînant de nombreux abandons de panier.",
            solution: "Simplification du tunnel d'achat en une page (One-page checkout), intégration de Stripe et optimisation de la vitesse de recherche de produits.",
            impact: "Augmentation du taux de conversion de 18% et augmentation du panier moyen grâce aux suggestions ciblées.",
        },
        en: {
            title: 'E-commerce', 
            category: 'Web App', 
            problem: "Complex purchase journey and conversion tunnel too long, leading to many cart abandonments.",
            solution: "Simplification of the purchase tunnel to a single page (One-page checkout), Stripe integration, and product search speed optimization.",
            impact: "18% increase in conversion rate and average basket increase thanks to targeted suggestions.",
        },
        image: '/projet4.png',
        technologies: ['Next.js', 'Stripe', 'Node.js', 'PostgreSQL']
    },
    { 
        id: 5,
        slug: 'dashboard',
        fr: {
            title: 'Dashboard', 
            category: 'Analyses', 
            problem: "Les équipes métiers manquaient de visibilité sur leurs KPIs en temps réel, s'appuyant sur des rapports manuels hebdomadaires.",
            solution: "Création d'un tableau de bord dynamique connecté aux API internes avec des visualisations de données interactives (Recharts).",
            impact: "Gain de temps de 5h/semaine pour les analystes et prise de décision facilitée par l'accès aux données en temps réel.",
        },
        en: {
            title: 'Dashboard', 
            category: 'Analytics', 
            problem: "Business teams lacked visibility on their KPIs in real-time, relying on manual weekly reports.",
            solution: "Creation of a dynamic dashboard connected to internal APIs with interactive data visualizations (Recharts).",
            impact: "5h/week time savings for analysts and easier decision-making through real-time data access.",
        },
        image: '/projet5.png',
        technologies: ['React', 'Recharts', 'Material-UI', 'GraphQL']
    },
    { 
        id: 6,
        slug: 'landing-page',
        fr: {
            title: 'Landing Page', 
            category: 'Marketing', 
            problem: "Besoin de lancer rapidement une page de capture de leads à fort taux de conversion pour une nouvelle campagne marketing.",
            solution: "Conception et développement rapide d'une landing page ultra-performante et optimisée pour l'A/B testing.",
            impact: "Acquisition de plus de 1500 leads qualifiés en 2 semaines avec un coût par acquisition réduit de 20%.",
        },
        en: {
            title: 'Landing Page', 
            category: 'Marketing', 
            problem: "Need to quickly launch a high-conversion lead capture page for a new marketing campaign.",
            solution: "Rapid design and development of an ultra-high-performance landing page optimized for A/B testing.",
            impact: "Acquisition of over 1500 qualified leads in 2 weeks with a 20% reduction in acquisition cost.",
        },
        image: '/projet-6.jpg',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'HubSpot API']
    },
];

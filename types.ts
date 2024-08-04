export type brandProps = {
    number: string;
    desc: string;
};

export type linkTypes = {
    link: string;
    path: string;
};

export interface stats {
    heading: string;
    description: string;
}

export type headerDescription = {
    title: string;
    subtitle: string;
    paragraph: string;
};

export interface testimony extends stats {
    image: string;
}

interface Link {
    link1: string;
    link2: string;
    link3: string;
    link4?: string;
}

export interface footerLinks {
    link: string,
    links: [Link];
}

export interface addresses {
    title: string;
    subtitle: string;
    button1: string;
    button2: string;
}
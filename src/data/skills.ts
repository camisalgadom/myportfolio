export interface Skill {
  name: string;
  url?: string;
  category?: string;
  highlighted?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Helper function to create skill objects with proper URLs
const createSkill = (name: string, url?: string, highlighted: boolean = false): Skill => ({
  name,
  url: url || `https://www.google.com/search?q=${encodeURIComponent(name)}+technology`,
  highlighted,
});

// Skill categories with their respective skills
export const skillsData = [
  {
    title: 'Programming Languages',
    skills: [
      createSkill('Python', 'https://www.python.org', true),
    ],
  },
  {
    title: 'Infra',
    skills: [
      createSkill('AWS Lambda', 'https://docs.aws.amazon.com/es_es/lambda/latest/dg/welcome.html'),
      createSkill('Amazon EC2', 'https://nextjs.org'),
      createSkill('ELB', 'https://reactnative.dev'),
      createSkill('Amazon VPC', 'https://nextjs.org'),
      createSkill('Amazon Route53', 'https://tailwindcss.com'),
    ],
  },
  {
    title: 'Security',
    skills: [
      createSkill('Amazon IAM', 'https://nodejs.org', true),
      createSkill('Amazon KMS', 'https://www.djangoproject.com'),
    ],
  },
  {
    title: 'Databases',
    skills: [
      createSkill('Amazon DynamoDB', 'https://www.mysql.com'),
      createSkill('Amazon RDS', 'https://www.oracle.com', true),
      createSkill('MySQL', 'https://www.mysql.com'),
      createSkill('OCI', 'https://www.oracle.com', true),
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      createSkill('Docker', 'https://www.docker.com'),
      createSkill('Terraform', 'https://www.terraform.io'),
    ],
  },
  {
    title: 'Data Science & Analytics',
    skills: [
      createSkill('Pandas', 'https://pandas.pydata.org', true),

    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      createSkill('GitHub', 'https://github.com', true),
    ],
  },
];

// Export the skills data as default
export default skillsData;

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
      createSkill('AWS Lambda', 'https://aws.amazon.com/es/lambda/?nc2=type_a'),
      createSkill('Amazon EC2', 'https://aws.amazon.com/es/ec2/?nc2=type_a'),
      createSkill('ELB', 'https://aws.amazon.com/es/elasticloadbalancing/'),
      createSkill('Amazon VPC', 'https://aws.amazon.com/es/vpc/?nc2=type_a'),
      createSkill('Amazon Route53', 'https://aws.amazon.com/es/route53/?nc2=type_a'),
    ],
  },
  {
    title: 'Security',
    skills: [
      createSkill('Amazon IAM', 'https://aws.amazon.com/es/iam/?nc2=type_a', true),
      createSkill('Amazon KMS', 'https://aws.amazon.com/es/kms/?nc2=type_a'),
    ],
  },
  {
    title: 'Databases',
    skills: [
      createSkill('Amazon DynamoDB', 'https://aws.amazon.com/es/dynamodb/?nc2=type_a'),
      createSkill('Amazon RDS', 'https://aws.amazon.com/es/rds/?nc2=type_a', true),
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

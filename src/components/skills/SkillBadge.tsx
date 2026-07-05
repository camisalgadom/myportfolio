'use client';
import * as React from 'react';
import Image from 'next/image';
import { Skill } from '@/data/skills';

interface SkillBadgeProps {
  skill: Skill;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

// Size configurations for different badge sizes
const sizeClasses = {
  sm: 'w-10 h-10 p-0.5',
  md: 'w-14 h-14 p-0.5',
  lg: 'w-18 h-18 p-0.5',
};

const iconSizes = {
  sm: 32,
  md: 40,
  lg: 48,
};

const getImagePath = (skillName: string): string => {
  // Map skill names to their corresponding image filenames
  const imageMap: Record<string, string> = {
    // Programming Languages
    Python: 'python-5.svg',

    // Amazon Web Services
    // Infra
    'Amazon EC2':'ec2.svg',
    'AWS Lambda': 'lambda.svg',
     ELB:'elb.svg',
    'Amazon VPC': 'vpc.svg',
    'Amazon Route53': 'route 53.svg',

    // Databases
    'Amazon DynamoDB': 'dynamodb.svg',
    'Amazon RDS': 'amazon RDS.svg',

    // Security
    'Amazon IAM': 'iam.svg',
    'Amazon KMS': 'aws kms.svg',


    // Databases
    MySQL: 'mysql-logo-pure.svg',
    OCI: 'oracle-corporation-logo.svg',

    // DevOps & Cloud
    Docker: 'docker-4.svg',
    Terraform: 'terraform.svg',

    // Version Control
    GitHub: 'github-icon-1.svg',

    // Data Science
    Pandas: 'pandas.svg',
  };

  // Use type assertion to ensure TypeScript knows we're handling the undefined case
  const iconName = skillName in imageMap ? imageMap[skillName] : 'default-icon.svg';
  return `/images/skills/${iconName}`;
};

/** A component that displays a skill badge with an icon and optional label
 * Uses local SVG images from the public/images/skills directory*/
const SkillBadge: React.FC<SkillBadgeProps> = ({
  skill,
  size = 'md',
  showLabel = true,
  className = '',
  onClick,
  interactive = true,
}) => {
  const [iconError, setIconError] = React.useState<boolean>(false);
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Get the icon path for the skill
  const iconPath = getImagePath(skill.name);

  // Handle click events
  const handleClick = (e: React.MouseEvent) => {
    if (!interactive) return;

    e.preventDefault();
    if (onClick) {
      onClick();
    } else if (skill.url) {
      window.open(skill.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!interactive) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) {
        onClick();
      } else if (skill.url) {
        window.open(skill.url, '_blank', 'noopener,noreferrer');
      }
    }
  };

  // Skip rendering on server to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  const highlightClass = skill.highlighted
    ? 'rounded-full shadow-lg shadow-purple-400/50 ring-1 ring-purple-500/50 transition-all duration-300 scale-105'
    : '';

  return (
    <div
      className="flex flex-col items-center group"
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={interactive ? 'button' : 'figure'}
      tabIndex={interactive ? 0 : -1}
      aria-label={interactive ? `Learn more about ${skill.name}` : skill.name}
      style={{
        cursor: interactive ? 'pointer' : 'default',
        transition: 'transform 0.2s ease',
        transform: isHovered && interactive ? 'translateY(-2px)' : 'none',
      }}
    >
      <div className={`${sizeClasses[size]} ${className} ${highlightClass}`}>
        <div className="relative w-full h-full flex items-center justify-center">
          {!iconError ? (
            <Image
              src={iconPath}
              alt={skill.name}
              width={iconSizes[size]}
              height={iconSizes[size]}
              className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
              onError={() => setIconError(true)}
              loading="lazy"
              title={skill.name}
            />
          ) : (
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {skill.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
      </div>

      {showLabel && (
        <span
          className={`text-sm font-medium text-center text-gray-700 dark:text-gray-300 transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 mt-1`}
          style={{
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {skill.name}
        </span>
      )}
    </div>
  );
};

export default SkillBadge;

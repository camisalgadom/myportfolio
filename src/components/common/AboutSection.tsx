import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png';

const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="md:w-1/4 lg:w-1/5 flex-shrink-0 mx-auto md:mx-0">
            <div className="relative">
              <Image
                src={Logo}
                alt="Ignacio Quevedo"
                width={240}
                height={240}
                className="rounded-full border-4 border-white shadow-xl w-full max-w-[240px] h-auto aspect-square object-cover relative z-10"
                priority
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-4xl font-extrabold mb-6 text-white tracking-tight drop-shadow-lg uppercase letter-spacing-wider">
              About Me
            </h2>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                <span className="text-gray-800 dark:text-gray-200">
                  Hello, my name is{' '}
                </span>
                <span className="font-bold text-blue-600 dark:text-blue-400">Ignacio Quevedo</span>
                <span className="text-gray-800 dark:text-gray-200"> </span>
                <span className="font-semibold"></span>
                <span className="text-gray-800 dark:text-gray-200"> </span>
                <span className="font-semibold"></span>.
              </p>

              <p>
                I&apos;m a <span className="font-semibold">Cloud Administrator</span> with a love for
                technology and continuous learning. I&apos;m specialize in{' '}
                <span className="font-semibold">
                  Data Analyst, Scientific Computing, Machine Learning, Deep Learning, AI and Cloud
                  and Python
                </span>
                , creating innovative solutions that enhance user experiences and drive business
                success. EDITTT
              </p>

              <p>
                I come from a healthcare background, where I learned that precision and strict adherence to protocols are non-negotiable. 
                I apply this same analytical discipline today to transform complex infrastructures into robust, secure, and efficient architectures. 
                My approach is not merely technical; it is human-centric and focused on solving real-world problems.
              </p>

              <p>
                Technical Capabilities QUE QUEDE AQUI MAS ABAJITO
                AWS & OCI: Expert in deployment and management (EC2, S3, IAM, VPC, RDS). 
                
                Automation: Scripting in Python (Pandas) and Bash for operational optimization.
                
                Innovation: Specialized in Generative AI models (Amazon Bedrock).

                Certifications: Oracle Cloud Infrastructure (Architect Associate, AI, Data Platform) and AWS Database@AWS Certified Architect Professional. 

              </p>

              <p>
                Beyond the Code QUE QUEDE AQUI MAS ABAJITO
                I stand out for my communication skills, resilience, and methodical thinking. 
                Outside of technology, I practice artisanal bookbinding and high-discipline physical training—two hobbies that have honed my patience, attention to detail, and ability to tackle complex challenges with determination.
              </p>
              <p className="italic text-md text-gray-500 dark:text-gray-400 mt-2">
                &quot;Small steps create big progress&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

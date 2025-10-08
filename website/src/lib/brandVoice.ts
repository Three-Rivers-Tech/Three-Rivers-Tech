/**
 * Brand Voice Guidelines for Three Rivers Tech
 * 
 * This file defines the consistent brand voice and messaging standards
 * to be applied across all website components and content.
 */

export interface BrandVoiceGuidelines {
  tone: string[];
  language: {
    avoid: string[];
    use: string[];
  };
  messaging: {
    focus: string;
    approach: string;
    credibility: string;
  };
  callToAction: {
    primary: string[];
    secondary: string[];
    avoid: string[];
  };
}

export const brandVoice: BrandVoiceGuidelines = {
  tone: [
    'professional',
    'approachable', 
    'expert',
    'solution-oriented',
    'trustworthy'
  ],
  
  language: {
    avoid: [
      'boring tasks',
      'normal people',
      'cheap',
      'easy',
      'simple',
      'basic',
      'just',
      'obviously',
      'everyone knows',
      'trust us',
      'believe us'
    ],
    use: [
      'efficient solutions',
      'business clients',
      'strategic partnerships',
      'comprehensive approach',
      'proven methodologies',
      'tailored solutions',
      'enterprise-grade',
      'scalable systems',
      'reliable infrastructure',
      'expert consultation'
    ]
  },

  messaging: {
    focus: 'business benefits and outcomes',
    approach: 'solution-oriented with specific value propositions',
    credibility: 'experience-based with measurable results'
  },

  callToAction: {
    primary: [
      'Schedule a Consultation',
      'Get Started Today',
      'Contact Our Experts',
      'Request a Quote',
      'Discuss Your Project'
    ],
    secondary: [
      'Learn More',
      'View Our Services',
      'See Case Studies',
      'Explore Solutions',
      'Download Resources'
    ],
    avoid: [
      'Click Here',
      'Read More',
      'Find Out',
      'Check It Out',
      'See What We Do'
    ]
  }
};

/**
 * Utility functions for applying brand voice consistently
 */
export class BrandVoiceHelper {
  /**
   * Validates if text follows brand voice guidelines
   */
  static validateContent(text: string): { isValid: boolean; issues: string[] } {
    const issues: string[] = [];
    const lowerText = text.toLowerCase();

    // Check for avoided phrases
    brandVoice.language.avoid.forEach(phrase => {
      if (lowerText.includes(phrase.toLowerCase())) {
        issues.push(`Avoid using "${phrase}" - use professional alternatives`);
      }
    });

    return {
      isValid: issues.length === 0,
      issues
    };
  }

  /**
   * Suggests professional alternatives for casual language
   */
  static getProfessionalAlternative(casualPhrase: string): string {
    const alternatives: Record<string, string> = {
      'boring tasks': 'routine operations',
      'normal people': 'business professionals',
      'cheap': 'cost-effective',
      'easy': 'streamlined',
      'simple': 'efficient',
      'basic': 'essential',
      'just': '',
      'trust us': 'our proven track record demonstrates',
      'believe us': 'our experience shows'
    };

    return alternatives[casualPhrase.toLowerCase()] || casualPhrase;
  }

  /**
   * Gets appropriate CTA text based on context
   */
  static getCTAText(context: 'primary' | 'secondary', index: number = 0): string {
    const ctas = brandVoice.callToAction[context];
    return ctas[index % ctas.length];
  }

  /**
   * Formats service descriptions with professional language
   */
  static formatServiceDescription(description: string): string {
    let formatted = description;
    
    // Replace casual phrases with professional alternatives
    Object.entries({
      'boring tasks': 'routine operations',
      'normal people': 'business professionals',
      'cheap': 'cost-effective',
      'easy': 'streamlined',
      'simple': 'efficient',
      'basic': 'essential'
    }).forEach(([casual, professional]) => {
      const regex = new RegExp(casual, 'gi');
      formatted = formatted.replace(regex, professional);
    });

    return formatted;
  }
}

/**
 * Standard messaging templates for consistency
 */
export const messagingTemplates = {
  valueProposition: {
    primary: "Professional IT services that drive business efficiency, security, and growth",
    secondary: "Expert technology solutions tailored to your business needs"
  },
  
  serviceIntros: {
    development: "Transform your business operations with custom software solutions designed for scalability and efficiency.",
    consulting: "Strategic IT guidance that aligns technology investments with your business objectives.",
    support: "Comprehensive IT infrastructure management ensuring optimal performance and security.",
    saas: "Seamless integration and optimization of business software tools for enhanced productivity."
  },

  benefits: {
    efficiency: "Streamline operations and reduce manual processes",
    security: "Protect your business with enterprise-grade security measures",
    scalability: "Solutions that grow with your business needs",
    reliability: "Dependable systems with 24/7 monitoring and support",
    expertise: "Leverage our years of experience in IT solutions"
  }
};
/**
 * Br
and Voice Validation and Consistency Checker
 */
export class BrandVoiceValidator {
  /**
   * Validates all CTA elements for consistency
   */
  static validateCTAConsistency(ctas: string[]): { isConsistent: boolean; issues: string[] } {
    const issues: string[] = [];
    const approvedCTAs = [...brandVoice.callToAction.primary, ...brandVoice.callToAction.secondary];
    
    ctas.forEach(cta => {
      const isApproved = approvedCTAs.some(approved => 
        cta.toLowerCase().includes(approved.toLowerCase()) || 
        approved.toLowerCase().includes(cta.toLowerCase())
      );
      
      if (!isApproved && brandVoice.callToAction.avoid.some(avoid => 
        cta.toLowerCase().includes(avoid.toLowerCase())
      )) {
        issues.push(`CTA "${cta}" uses discouraged language. Consider: ${brandVoice.callToAction.primary[0]}`);
      }
    });

    return {
      isConsistent: issues.length === 0,
      issues
    };
  }

  /**
   * Generates professional CTA alternatives
   */
  static generateCTAAlternatives(context: 'service' | 'contact' | 'portfolio' | 'general'): string[] {
    const contextMap = {
      service: ['Schedule a Consultation', 'Request Assessment', 'Explore Solutions'],
      contact: ['Contact Our Experts', 'Get Started Today', 'Schedule a Meeting'],
      portfolio: ['View Case Studies', 'See Our Work', 'Explore Projects'],
      general: ['Learn More', 'Get Started', 'Contact Us']
    };

    return contextMap[context] || contextMap.general;
  }

  /**
   * Checks content for brand voice compliance
   */
  static auditContent(content: string): {
    score: number;
    issues: string[];
    suggestions: string[];
  } {
    const issues: string[] = [];
    const suggestions: string[] = [];
    let score = 100;

    // Check for avoided phrases
    brandVoice.language.avoid.forEach(phrase => {
      if (content.toLowerCase().includes(phrase.toLowerCase())) {
        issues.push(`Avoid using "${phrase}"`);
        suggestions.push(`Replace "${phrase}" with professional alternative`);
        score -= 10;
      }
    });

    // Check for professional language usage
    const professionalTermsUsed = brandVoice.language.use.filter(term =>
      content.toLowerCase().includes(term.toLowerCase())
    ).length;

    if (professionalTermsUsed === 0) {
      suggestions.push('Consider incorporating more professional terminology');
      score -= 5;
    }

    return {
      score: Math.max(0, score),
      issues,
      suggestions
    };
  }
}

/**
 * Standard CTA mappings for different contexts
 */
export const standardCTAs = {
  primary: {
    consultation: 'Schedule a Consultation',
    contact: 'Contact Our Experts',
    assessment: 'Request Assessment',
    quote: 'Request Quote'
  },
  secondary: {
    services: 'View Our Services',
    portfolio: 'See Case Studies',
    solutions: 'Explore Solutions',
    resources: 'Download Resources'
  }
} as const;
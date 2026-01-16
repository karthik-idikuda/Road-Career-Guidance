class RecommendationEngine {
    constructor(database) {
        this.database = database;
    }

    /**
     * Calculates specific match scores for a student profile against all careers
     */
    getRecommendations(profile) {
        return this.database.map(career => {
            let score = 0;
            let maxScore = 0;

            // 1. Interest Match (High Weight: 40%)
            const interestWeight = 40;
            const sharedInterests = career.matchCriteria.interests.filter(i => 
                profile.step5?.interests?.includes(i)
            );
            // Bonus points for specific matches
            if (profile.step2?.careerFields?.includes(career.category)) {
                score += (interestWeight * 0.5);
            }
            score += (sharedInterests.length / career.matchCriteria.interests.length) * (interestWeight * 0.5);
            maxScore += interestWeight;

            // 2. Skill Match (Medium Weight: 30%)
            const skillWeight = 30;
            const studentSkills = [...(profile.step4?.technicalSkills || []), ...(profile.step4?.softSkills || [])];
            const sharedSkills = career.matchCriteria.skills.filter(s => 
                studentSkills.includes(s)
            );
            score += (sharedSkills.length / career.matchCriteria.skills.length) * skillWeight;
            maxScore += skillWeight;

            // 3. Stream/Education Eligibility (Critical Weight: 30%)
            const eduWeight = 30;
            const studentStream = profile.step3?.stream;
            
            // Loose matching for stream to allow for flexible paths
            let streamMatch = 0;
            if (career.matchCriteria.stream.includes(studentStream) || career.matchCriteria.stream.length === 0) {
                streamMatch = 1;
            } else if (studentStream === 'science-pcm' && career.category === 'technology') {
                streamMatch = 1; // PCM can go into most tech
            } else if (studentStream === 'science-pcb' && career.category === 'healthcare') {
                streamMatch = 1;
            }
            
            score += streamMatch * eduWeight;
            maxScore += eduWeight;

            return {
                ...career,
                matchScore: Math.round((score / maxScore) * 100),
                why: this.generateWhy(sharedInterests, sharedSkills, streamMatch)
            };
        }).sort((a, b) => b.matchScore - a.matchScore);
    }

    generateWhy(interests, skills, eligible) {
        const reasons = [];
        if (eligible) reasons.push("Aligns with your education.");
        if (interests.length > 0) reasons.push(`Matches your interest in ${interests.join(', ')}.`);
        if (skills.length > 0) reasons.push(`Utilizes your skills in ${skills.join(', ')}.`);
        return reasons.join(' ');
    }

    /**
     * Generates a timely roadmap based on where the student IS right now
     */
    generatePersonalizedRoadmap(career, profile) {
        const currentEdu = profile.step3?.education || '12th';
        
        // Dynamic Roadmap modification
        return career.roadmap.map(step => {
            // Personalize descriptions based on user context could happen here
            return step;
        });
    }
}

// Export for global use
window.RecommendationEngine = RecommendationEngine;
window.careerDatabase = careerDatabase;

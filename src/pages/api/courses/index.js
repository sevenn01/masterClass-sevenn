import { getCourses } from "@/lib/getCourses";
//import { headers } from "next/headers";





export default async function handler(req, res) {
  
  try {
    
    const coursesContent = await getCourses();
    res.status(200).json(coursesContent);
    
  } catch (error) {
    res.status(500).json({ error: 'failed to fetch courses data!!'});
  }
};



/*
export default async function handler(req, res) {
    const coursesContent = [
      { id: '1', title: 'Week 1', goal: 'Goal for Week 1', tools: ['Blender', 'AfterEffect'], links: 'Download-week 1 ->', chapters: ['Chapter 1', 'Chapter 2'] },
      { id: '2', title: 'Week 2', goal: 'Goal for Week 2', tools: ['Blender', 'AfterEffect', 'Davinshi', 'Photoshop'], links: 'Download-week 2 ->', chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'] },
    ];
    res.status(200).json(coursesContent);
};
*/
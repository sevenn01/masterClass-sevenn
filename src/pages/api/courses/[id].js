export default function handler(req, res) {
    const { id } = req.query;
    const coursesContent = [
      { id: '1', title: 'Week 1', goal: 'Goal for Week 1', tools: ['Blender', 'AfterEffect'], links: 'Download-week 1 ->', chapters: ['Chapter 1', 'Chapter 2'] },
      { id: '2', title: 'Week 2', goal: 'Goal for Week 2', tools: ['Blender', 'AfterEffect', 'Davinshi', 'Photoshop'], links: 'Download-week 2 ->', chapters: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4'] },
    ];
  
    const course = coursesContent.find((course) => course.id === id);
  
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  }
  
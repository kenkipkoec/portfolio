import fs from 'fs';
import PDFDocument from 'pdfkit';

const resumeData = {
  name: 'Ngetich Ken',
  title: 'Full-Stack Developer',
  email: 'ken.kipkoech@student.moringaschool.com',
  summary:
    'Creative and results-driven developer delivering scalable web and mobile solutions. I bridge frontend excellence with backend stability and AI-enhanced systems.',
  skills: [
    { title: 'Frontend', items: ['React 18, TypeScript, Tailwind CSS', 'Flutter 3.19+, Dart', 'Vite, React Router'] },
    { title: 'Backend', items: ['Python (Flask, Django)', 'Node.js, Express', 'Firebase Cloud Functions, Supabase'] },
    { title: 'Cloud & Tools', items: ['Firebase, Supabase, Google Cloud', 'Vertex AI, RevenueCat, EmailJS', 'Git, GitHub, ESLint'] },
  ],
  projects: [
    {
      title: 'Trelio',
      description: 'Mental health support platform combining peer support, therapist booking, mood analytics, and AI wellness companion features.',
      link: 'https://github.com/kenkipkoec/Trelio-app',
    },
    {
      title: 'HomeCare Hub',
      description: 'Service booking platform with responsive UI, admin dashboard, and real-time workflows.',
      link: 'https://github.com/kenkipkoec/home-care',
    },
  ],
};

function generateResume() {
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
  const outputPath = 'public/resume.pdf';
  const stream = fs.createWriteStream(outputPath);

  doc.pipe(stream);

  doc.fontSize(26).fillColor('#1f2937').text(resumeData.name, { continued: true }).fillColor('#2563eb').text('  |  ' + resumeData.title);
  doc.moveDown();
  doc.fontSize(12).fillColor('#4b5563').text(resumeData.email);
  doc.moveDown();

  doc.fontSize(14).fillColor('#111827').text('Summary', { underline: true });
  doc.moveDown(0.5);
  doc.fontSize(11).fillColor('#374151').text(resumeData.summary, { lineGap: 4 });
  doc.moveDown();

  resumeData.skills.forEach((skill) => {
    doc.fontSize(13).fillColor('#111827').text(skill.title, { underline: true });
    doc.moveDown(0.3);
    skill.items.forEach((item) => {
      doc.fontSize(11).fillColor('#4b5563').text('• ' + item, { indent: 12, lineGap: 2 });
    });
    doc.moveDown();
  });

  doc.fontSize(13).fillColor('#111827').text('Featured Projects', { underline: true });
  doc.moveDown(0.3);
  resumeData.projects.forEach((project) => {
    doc.fontSize(12).fillColor('#111827').text(project.title, { continued: true }).fillColor('#2563eb').text('  ' + project.link);
    doc.moveDown(0.2);
    doc.fontSize(11).fillColor('#4b5563').text(project.description, { indent: 12, lineGap: 2 });
    doc.moveDown();
  });

  doc.end();

  stream.on('finish', () => {
    console.log(`Resume generated at ${outputPath}`);
  });
}

generateResume();

import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5,
    },
  },
};

const Stories = () => {
  return (
    <motion.div
      className="container mx-auto p-4"
      variants={containerVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <h1 className="text-4xl font-bold mb-4">
        From Victim to Advocate: Laila’s Story of Hope
      </h1>
      <p className="text-lg mb-8">
        Laila’s life took a devastating turn when she was forced into an abusive
        marriage at the age of 16. Her story could have ended in tragedy, but it
        didn’t. Laila found the courage to escape her marriage and seek help from
        a women’s shelter in Dushanbe. With the guidance of social workers and
        support from a legal aid program, she was able to regain her independence
        and reclaim her future.
      </p>
      <p className="text-lg mb-8">
        Now, Laila is not only a survivor but a passionate advocate for women's
        rights. She travels around Tajikistan, speaking to young girls and women
        about the dangers of early marriage and the importance of standing up
        for their rights. Her voice has become a symbol of resilience, and she is
        determined to help create a future where no woman in Tajikistan has to
        suffer in silence.
      </p>
      <h1 className="text-4xl font-bold mb-4">
        The Power of Education: Changing Minds, Changing Lives
      </h1>
      <p className="text-lg mb-8">
        In a small town in Tajikistan, a group of students embarked on a project
        to raise awareness about gender-based violence in their school. The
        students learned about the signs of abuse, the rights of women, and the
        importance of creating a safe environment for everyone. They created
        posters, held workshops, and hosted discussions to inform their peers and
        teachers about the impact of violence.
      </p>
      <p className="text-lg mb-8">
        Their efforts sparked a wave of change in the community, with many
        families starting to open up about the issues they had kept hidden for
        so long. The students’ work demonstrated the power of education in
        changing minds and breaking down the cultural barriers that often
        prevent victims from speaking out. Through education, they helped to
        build a future where respect, equality, and nonviolence are at the heart
        of every relationship.
      </p>
    </motion.div>
  );
};

export default Stories;
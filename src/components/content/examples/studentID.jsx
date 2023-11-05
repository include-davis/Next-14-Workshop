import Image from 'next/image';
import styles from '@styles/content/examples/studentID.module.scss';

export default function StudentID({ name, img, bday }) {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <Image src={img} alt={`picture of ${name}`} width="200" height="200" />
      <p>{bday}</p>
    </div>
  );
}

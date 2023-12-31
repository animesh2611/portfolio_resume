import styles from "../../styles/Experience.module.css";
import Image from "next/image";
const Job = (props) => {
  return (
    <div className={styles.jobContainer}>
      <div className={styles.logo}>
        <Image
          src={props.src}
          layout={'fill'}
          alt={props.companyName}
          objectFit={'cover'}
          blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          placeholder="blur"
          
        />
      </div>
      <div className={styles.text}>
        <div className={styles.jobTitle}>
          <h1>{props.jobTitle}</h1>
        </div>
        <div className={styles.jobBody}>
          <h3>{props.companyName}</h3>
          <p>{props.desc}</p>
        </div>
      </div>
      <div className={styles.timeLine}>
          <h3>{props.date}</h3>
      </div>
    </div>
  );
};

export default Job;

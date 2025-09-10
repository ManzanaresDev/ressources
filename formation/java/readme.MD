# Maven en Java

Maven est un **outil de build** (construction de projet) qui simplifie la gestion et l’automatisation du développement en Java.  

---

## 🔹 Ce que fait Maven
1. **Gestion des dépendances**  
   - Déclare les bibliothèques nécessaires dans un fichier unique (`pom.xml`).  
   - Télécharge automatiquement les JAR depuis Maven Central.  

2. **Standardisation du projet**  
   - Structure commune et claire :  
     ```
     mon-projet/
       ├─ src/
       │   ├─ main/java       (code Java)
       │   ├─ main/resources  (fichiers de config)
       │   └─ test/java       (tests unitaires)
       └─ pom.xml             (fichier de configuration Maven)
     ```

3. **Automatisation des tâches**  
   - Compilation : `mvn compile`  
   - Tests : `mvn test`  
   - Création du JAR/WAR : `mvn package`  
   - Nettoyage : `mvn clean`  
   - Déploiement local : `mvn install`  

4. **Extensibilité**  
   - Plugins disponibles pour tests, documentation, qualité de code, etc.  

---

## 🔹 Comment s’y prendre (premiers pas)

### 1. Installer Maven
- Télécharger [Apache Maven](https://maven.apache.org/download.cgi).  
- Configurer la variable d’environnement `MAVEN_HOME` et ajouter `bin` dans ton `PATH`.  
- Vérifier l’installation :  
  ```bash
  mvn -v
  ```

### 2. Créer un projet Maven
```bash
mvn archetype:generate   -DgroupId=com.example   -DartifactId=mon-projet   -DarchetypeArtifactId=maven-archetype-quickstart   -DinteractiveMode=false
```

### 3. Exemple de `pom.xml`
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">

  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>mon-projet</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>jar</packaging>

  <dependencies>
    <!-- Dépendance JUnit pour les tests -->
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.13.2</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

</project>
```

---

## 🔹 Exemple concret

### Classe Java
Fichier : `src/main/java/com/example/App.java`
```java
package com.example;

public class App {
    public String sayHello() {
        return "Hello, Maven!";
    }

    public static void main(String[] args) {
        App app = new App();
        System.out.println(app.sayHello());
    }
}
```

### Test JUnit
Fichier : `src/test/java/com/example/AppTest.java`
```java
package com.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class AppTest {
    @Test
    public void testSayHello() {
        App app = new App();
        assertEquals("Hello, Maven!", app.sayHello());
    }
}
```

---

## 🔹 Lancer des commandes Maven

- Compiler :  
  ```bash
  mvn compile
  ```
- Exécuter les tests :  
  ```bash
  mvn test
  ```
- Créer un JAR :  
  ```bash
  mvn package
  ```
- Nettoyer le projet :  
  ```bash
  mvn clean
  ```

---

## ✅ En résumé
Maven permet de **gérer les dépendances, structurer ton projet et automatiser ton cycle de développement** en Java.

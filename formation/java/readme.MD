# JAVA

[🎥 Regarder la vidéo sur YouTube](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

# Maven en Java

![Maven](maven.jpg)

Maven est un **outil de build** (construction de projet) qui simplifie la gestion et l’automatisation du développement en Java.
Maven permet de **gérer les dépendances, structurer ton projet et automatiser ton cycle de développement** en Java.

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

# Manuel Maven : Dépendances & Plugin Maven Helper

## 1. Installation de dépendances Maven

### Étape 1 : Ajouter une dépendance

Dans ton `pom.xml`, ajoute tes dépendances dans la section `<dependencies> ... </dependencies>`.

Exemple avec **JUnit** (tests unitaires) :

```xml
<dependencies>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.10.2</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

### Étape 2 : Télécharger les dépendances

En ligne de commande :

```bash
mvn clean install
```

Dans **IntelliJ** → clic droit sur le projet → `Maven` → `Reload Project`.

👉 Maven télécharge automatiquement la librairie depuis le **Maven Central Repository**.

### Étape 3 : Vérifier l’installation

- En CLI : les libs se trouvent dans `~/.m2/repository/`
- Dans IntelliJ : onglet **Maven** (à droite) → `Dependencies`.

---

## 2. Installation du plugin Maven Helper (IntelliJ IDEA)

Le plugin **Maven Helper** est utile pour :

- Visualiser l’arbre des dépendances
- Détecter les conflits de versions
- Exclure une dépendance en double

### Étape 1 : Installer Maven Helper

1. Ouvre **IntelliJ IDEA**
2. Menu `File` → `Settings` → `Plugins`
3. Onglet **Marketplace**
4. Recherche **Maven Helper**
5. Clique **Install** et redémarre IntelliJ

### Étape 2 : Utiliser Maven Helper

1. Ouvre ton `pom.xml`
2. Un onglet **Dependency Analyzer** apparaît en bas
3. Tu pourras :
   - Voir l’arbre des dépendances
   - Identifier des conflits
   - Exclure des dépendances

---

## Exemple pratique : exclure une dépendance

Si deux versions d’une librairie rentrent en conflit :

```xml
<dependency>
    <groupId>org.example</groupId>
    <artifactId>ma-lib</artifactId>
    <version>1.2.3</version>
    <exclusions>
        <exclusion>
            <groupId>org.example</groupId>
            <artifactId>ancienne-lib</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

---

# Tests in JAVA avec JUnit5

## @BeforeAll

- Exécuté **une seule fois avant tous les tests** de la classe.
- Utilisé pour initialiser des ressources lourdes (connexion à une base de données, serveur de test, etc.).
- Doit être **static**, sauf si on utilise `@TestInstance(Lifecycle.PER_CLASS)`.

## @BeforeEach

- Exécuté **avant chaque test individuel**.
- Sert à réinitialiser l’état (objets, variables, configuration).

---

## Exemple

```java
import org.junit.jupiter.api.*;

public class ExempleTest {

    @BeforeAll
    static void initAll() {
        System.out.println("Avant TOUS les tests (1 seule fois)");
    }

    @BeforeEach
    void init() {
        System.out.println("Avant CHAQUE test");
    }

    @Test
    void test1() {
        System.out.println("Test 1");
    }

    @Test
    void test2() {
        System.out.println("Test 2");
    }

    @AfterEach
    void tearDown() {
        System.out.println("Après CHAQUE test");
    }

    @AfterAll
    static void tearDownAll() {
        System.out.println("Après TOUS les tests (1 seule fois)");
    }
}
```

### Sortie possible :

```
Avant TOUS les tests (1 seule fois)
Avant CHAQUE test
Test 1
Après CHAQUE test
Avant CHAQUE test
Test 2
Après CHAQUE test
Après TOUS les tests (1 seule fois)
```

---

## Résumé

- `@BeforeAll` = une seule fois, au début.
- `@BeforeEach` = avant chaque méthode de test.

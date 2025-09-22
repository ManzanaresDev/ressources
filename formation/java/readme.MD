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

# Réaliser un test unitaire Java avec JUnit 5

## ⚙️ Pré-requis

1. **Ajouter la dépendance JUnit 5** :

- Avec **Maven** (`pom.xml`) :

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

- Avec **Gradle** :

```gradle
testImplementation 'org.junit.jupiter:junit-jupiter:5.10.2'
```

2. Vérifier que ton IDE (IntelliJ, Eclipse, VS Code) sait exécuter des tests JUnit.

---

## 🧪 Exemple simple

### Classe à tester

```java
public class Calculatrice {
    public int addition(int a, int b) {
        return a + b;
    }

    public int division(int a, int b) {
        if (b == 0) throw new IllegalArgumentException("Division par zéro !");
        return a / b;
    }
}
```

### Classe de test (JUnit 5)

```java
import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

class CalculatriceTest {

    private Calculatrice calc;

    @BeforeEach
    void setUp() {
        calc = new Calculatrice();
    }

    @Test
    void testAddition() {
        int resultat = calc.addition(2, 3);
        assertEquals(5, resultat, "2 + 3 doit être égal à 5");
    }

    @Test
    void testDivision() {
        int resultat = calc.division(10, 2);
        assertEquals(5, resultat);
    }

    @Test
    void testDivisionParZero() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            calc.division(10, 0);
        });
        assertEquals("Division par zéro !", exception.getMessage());
    }
}
```

---

## 🚀 Explications

- `@BeforeEach` → exécuté avant chaque test (instancie `Calculatrice` neuve).
- `@Test` → indique qu’une méthode est un test.
- `assertEquals(expected, actual)` → vérifie que la valeur attendue = valeur calculée.
- `assertThrows` → vérifie qu’une exception spécifique est bien levée.

---

# Principes FIRST pour des tests logiciels de qualité

Les principes **FIRST** résument les qualités attendues pour écrire des tests unitaires efficaces :

## 🧩 FIRST

1. **Fast (Rapides)**

   - Les tests doivent s’exécuter vite pour pouvoir être lancés souvent (idéalement à chaque sauvegarde ou commit).
   - Des tests lents découragent les développeurs de les exécuter.

2. **Independent (Indépendants)**

   - Chaque test doit pouvoir s’exécuter seul, dans n’importe quel ordre.
   - Pas de dépendance entre tests ni de partage d’état caché (ex. base de données non réinitialisée).

3. **Repeatable (Répétables)**

   - Un test doit donner le même résultat quel que soit l’environnement (machine locale, CI/CD, serveur).
   - Éviter les dépendances externes non contrôlées (réseau, API tierces, date/heure système sans mock, etc.).

4. **Self-Validating (Auto-validants)**

   - Un test doit dire clairement s’il passe ou échoue, sans nécessiter d’inspection humaine.
   - Pas de logs à analyser à la main pour conclure.

5. **Timely (Opportuns)**
   - Les tests doivent être écrits **au bon moment**, idéalement avant ou pendant le développement de la fonctionnalité (TDD/BDD).
   - Écrire les tests après coup conduit souvent à des tests superficiels ou incomplets.

---

## ⚖️ Autres principes utiles

- **Lisibilité > complexité** : un test doit être simple à comprendre, presque comme une documentation exécutable.
- **Isolation** : mocker ou stubber les dépendances pour cibler une seule unité de code.
- **Nommage clair** : un bon nom de test décrit _ce qui est testé_ et _le résultat attendu_.
- **Maintenance** : des tests bien structurés (Arrange-Act-Assert) se maintiennent plus facilement.

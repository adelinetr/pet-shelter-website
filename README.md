## Pet Shelter Website 
- It's a React Typescript project and for styling I used Tailwind CSS framework since it's easy to maintain design by predefining typography, color palette and making custom components.

![image](https://github.com/adelinetr/pet-shelter-website/assets/119743518/41c46a83-9148-4d6f-8a2b-9315c09b079f)

Website Link: https://adaline-pet-shelter.netlify.app/

![20240227_154957](https://github.com/adelinetr/pet-shelter-website/assets/119743518/d42a9d3a-55f7-49b3-8e91-36e4823e035c)
![ezgif-5-1dd39f7110](https://github.com/adelinetr/pet-shelter-website/assets/119743518/d761ff4c-cadb-4223-860a-866f12acadcb)


## Lazy Loading & Search Functionality
- Here I added a 'Load on scroll' functionality to the main section where I had the list of images from Cat & Dog APIs. 
- When using a search bar and typing a keyword of the city or the name of the pet, it shows only pets that have this keyword.

![ezgif-6-defbfa9e34](https://github.com/adelinetr/pet-shelter-website/assets/119743518/3c2b91a8-8a34-4d11-b69c-045aedca409d)
![ezgif-5-61e67f9f42](https://github.com/adelinetr/pet-shelter-website/assets/119743518/92c2c396-63a1-4a0c-be06-b9e723b1d0f0)

### Implementation of Lazy Loading
```js
const handleScroll = () => {
    const section = document.getElementById("catSection")!;
    if (
      section.scrollHeight - window.innerHeight <= window.scrollY &&
      !isLoading &&
      section.scrollHeight - window.innerHeight + 1000 >= window.scrollY &&
      !isLoading
    ) {
      setIsLoading(true);
      loadNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);
```

### Implementation of Search and Selector
```js
// Filtering cats by selecting cities in Selector
  const filteredCats = cats.filter((cat) => {
    if (selectedCity === "All cities" || selectedCity === "") {
      return true;
    } else {
      return cat.location === selectedCity;
    }
  });

  // Searching by a keyword in the Search Input
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value.toLowerCase());
  };

  // Filter cats by a keyword in the Search Input
  const searchedCats = filteredCats.filter(
    (cat) =>
      cat.location.toLowerCase().includes(searchWord) ||
      cat.name.toLowerCase().includes(searchWord)
  );
```

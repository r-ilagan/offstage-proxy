# Search

## URL

`/api/v1/search?mode=[string]&query=[string]&page=[int]`

## Method

`Get`

## Query Params

### `mode=[string]` <sup><sub>_required_</sub></sup>

- mode = `multi` | `movie` | `keyword` | `person` | `tv`

### `query=[string]` <sup><sub>_required_</sub></sup>

- query = `any string` <sub><sup>_(must be url encoded)_</sup></sub>

### `page=[int]` <sup><sub>_optional_</sub></sup>

- min: `1`
- max: `1000`

## Response

- **Success**

  - **code**: `200`
  - **response**:

````javascript
  {
    page: int,
    results : [object],
    total_results: int,
    total_pages: int
  }```
````

- **Error**

  - **code**: `401`|`404`
  - **response**:

```javascript
  {
    status_message: string,
    status_code: int
  }
```

## Sample Call

```javascript
axios.get('/search?mode=multi&query=titanic&page=1');
```

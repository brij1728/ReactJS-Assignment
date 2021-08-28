
export interface SearchProps {
  onChange: (text: string) => void;
  onSubmit: () => void;
}
export const SearchBar: React.FC<SearchProps> = ({
  onChange,
  onSubmit,
}) => {
  return (
    <>
      <div>
        <label>Search Flickr Photos </label>
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => {
            onChange(event.target.value.trim());
          }}
        ></input>
        <button type="submit" onClick={onSubmit}>
          Search
        </button>
      </div>
    </>
  );
};

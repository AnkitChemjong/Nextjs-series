import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
function CommonForm({
  action,
  buttonText,
  handleFileChange,
  isBtnDisabled,
  formControls,
  btnType,
  formData,
  setFormData,
}) {
  function renderInputByComponentType(getCurrentControl) {
    let content = null;
    switch (getCurrentControl.componentType) {
      case "input":
        content = (
          <div key={getCurrentControl.name} className="relative flex items-center mt-8">
            <Input
              type="text"
              disabled={getCurrentControl.disabled}
              placeholder={getCurrentControl.placeholder}
              id={getCurrentControl.nam}
              value={formData[getCurrentControl.name]}
              name={getCurrentControl.name}
              onChange={(event) =>{setFormData({
                ...formData,
                [event.target.name]:event.target.value,
              })
            }}
              className="w-full rounded-md h-[60px] px-4 border bg-gray-100 text-lg outline-none drop-shadow transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        );
        break;
      case "file":
        content = (
          <Label
          key={getCurrentControl.name}
            for={getCurrentControl.name}
            className="flex bg-gray-100 items-center px-3 py-3 mx-auto mt-6 text-center border-2 border-dashed rounded-lg cursor-pointer"
          >
            <h2>{getCurrentControl.label}</h2>
          <Input type='file' name={getCurrentControl.name} onChange={handleFileChange} id={getCurrentControl.name} />
          </Label>
        );
        break;
      default:
        content = (
          <div className="relative flex items-center mt-8">
            <Input
            key={getCurrentControl.name}
              type="text"
              disabled={getCurrentControl.disabled}
              placeholder={getCurrentControl.placeholder}
              id={getCurrentControl.nam}
              value={formData[getCurrentControl.name]}
              name={getCurrentControl.name}
              onChange={(event) =>{setFormData({
                ...formData,
                [event.target.name]:event.target.value,
              })
            }}
              className="w-full rounded-md h-[60px] px-4 border bg-gray-100text-lg outline-none drop-shadow transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        );
        break;
    }
    return content;
  }
  return (
    <form action={action}>
      {formControls?.map((control) => renderInputByComponentType(control))}
      <div className="mt-6 w-full ">
        <Button
          className="disabled:opacity-60 flex h-11 items-center justify-center px-5"
          type={btnType || "submit"}
          disabled={isBtnDisabled}
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
}
export default CommonForm;

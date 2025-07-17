function RHFSelect({ label, name, register, options, isRequired, errors }) {
    const errorMessages = errors?.[name];
    const hasError = (errors && errorMessages);
    return (
        <div>
            <label htmlFor={name} className="mb-2 block text-secondary-700">
                {label} {isRequired && <span className="text-error">*</span>}
            </label>
            <select {...register(name)} id={name} className={`textField__input ${hasError ? "border border-red-600" : ""}`}>
                <option value=''>انتخاب کنید</option>
                {options.map((option) => (
                    <option key={option._id} value={option._id}>
                        {option.title}
                    </option>
                ))}
            </select>
            {errors && errors[name] && (
                <span className="text-red-600 block text-xs mt-2">
                    {errors[name]?.message}
                </span>
            )}
        </div>
    );
}
export default RHFSelect;

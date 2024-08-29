const AddIncome = () => {
  return (
    <>
      <div>
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Add Your Income
          </h1>

          <form action="#" className="mb-0 mt-6 space-y-4 ">
            <div>
              <label htmlFor="email">Name</label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm shadow-sm mt-1"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password">Amount</label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm shadow-sm mt-1"
                  placeholder="Enter amount"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password">Date</label>

              <div className="relative">
                <input
                  type="date"
                  className="w-full rounded-lg border-[1px] border-gray-200 p-4  text-sm shadow-sm mt-1"
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Add Income
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddIncome;

const getTransitionStyles = timeout => {
    return {
      entering: {
        opacity: 0
      },
      entered: {
        transition: `all ${timeout}ms cubic-bezier(.58,.02,.45,1)`,
        opacity: 1
      },
      exiting: {
        transition: `all ${timeout}ms cubic-bezier(.58,.02,.45,1)`,
        opacity: 0
      },
    }
  }
  
  const getTransitionStyle = ({ timeout, status }) =>
    getTransitionStyles(timeout)[status]
  
  export default getTransitionStyle
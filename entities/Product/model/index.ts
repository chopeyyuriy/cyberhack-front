export function getProductStatusText(status: number) {
  const statuses = [
    {
      label: "Updating",
      class: "updating",
    },
    {
      label: "Detected",
      class: "detected",
    },
    {
      label: "Undetected",
      class: "undetected",
    },
    {
      label: "Testing",
      class: "testing",
    },
    {
      label: "At own risk",
      class: "risk",
    },
  ];
  return statuses[status].label;
}

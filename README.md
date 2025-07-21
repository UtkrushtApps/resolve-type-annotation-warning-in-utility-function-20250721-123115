# Task Overview

An update to the invoice records has added an optional 'discountCode' property, resulting in runtime errors due to mismatched type definitions and unsafe processing logic. Your task is to update the relevant interface and adjust the script to accurately and safely handle this optional property, ensuring all invoices (with or without 'discountCode') are correctly processed without errors.

# Guidance

- Ensure interface definitions reflect all possible properties now present in the data.
- Safely handle data properties that may not be present to prevent runtime exceptions.
- The processing logic should output discount codes in uppercase only when available.
- Keep the code clean and type-safe to avoid future issues with similar data changes.

# Objectives

- Update the invoice interface to optionally include 'discountCode'.
- Modify logic that accesses 'discountCode' so it does not throw when the property is absent.
- Guarantee that the processor prints uppercase codes where present and completes the sum for all records.

# How to Verify

- Run the script and check that invoices without a discount code do not cause errors.
- Confirm that discount codes (when present) are logged in uppercase.
- Ensure the script completes and outputs the total amount for all invoices without crashing.